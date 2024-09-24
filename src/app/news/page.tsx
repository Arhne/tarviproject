"use client"
import styles from "./news.module.scss";
import { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";



interface NewsItem {
  id: number;
  title: string;
  date: string;
  intro: string;
}


const fetchNewsData = async (): Promise<NewsItem[]> => {
  const response = await fetch("/data/newsData.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const NewsPage = () => {
  const [visibleItems, setVisibleItems] = useState(10); 
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({}); 

  const toggleContent = (id: number) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5); 
  };

  const { data, error, isLoading, isError } = useQuery<NewsItem[]>({
    queryKey: ["newsData"],
    queryFn: fetchNewsData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data: {error.message}</div>;
  }
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className={styles.newsContainer}>
      <h1>Latest News</h1>

      {data?.slice(0, visibleItems).map((item) => (
        <div key={item.id} className={styles.newsItem}>
          <h2>{item.title}</h2>
          <Link href={`/news/${item.id}`}>
            <p>
              {expandedItems[item.id]
                ? item.intro 
                : item.intro.substring(0, 20) + "..."}
            </p>
          </Link>
          <button onClick={() => toggleContent(item.id)}>
            {expandedItems[item.id] ? "Read Less" : "Read More"}
          </button>
          <p>
            <em>{item.date}</em>
          </p>
        </div>
      ))}

      {visibleItems < data?.length && (
        <button onClick={loadMoreItems}>Load More</button>
      )}
    </div>
  );
};

export default NewsPage;

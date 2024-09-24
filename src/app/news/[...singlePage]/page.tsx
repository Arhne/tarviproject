import { useRouter } from "next/router";
import newsData from "../../../../data/newsData.json";
import styles from "./style.module.scss"

const NewsDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const newsItem = newsData.find((item) => item.id === parseInt(id as string));

  if (!newsItem) {
    return <p>News article not found!</p>;
  }

  return (
    <div>
      {newsItem.videoUrl && (
        <div className="video-wrapper">
          <video width="100%" controls>
            <source src={newsItem.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <h1>{newsItem.title}</h1>
      <p>
        <em>{newsItem.date}</em>
      </p>
      <p>{newsItem.intro}</p>
      {/* {newsItem.image && <img src={newsItem.image} alt={newsItem.title} />} */}
      {newsItem.mainContent &&
        newsItem.mainContent.map((section, index) => (
          <div key={index}>
            <p>{section.text}</p>
          </div>
        ))}

      {newsItem.externalLink && (
        <p>
          For more detailed information,
          <a
            href={newsItem.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
          .
        </p>
      )}

      {newsItem.conclusion && (
        <div>
          <h3>Conclusion</h3>
          <p>{newsItem.conclusion}</p>
        </div>
      )}
    </div>
  );
};

export default NewsDetailPage;

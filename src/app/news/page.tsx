import styles from "./news.module.scss";
import Link from "next/link";
import { getNewsList } from "@/sanity/lib/fetch";

export const revalidate = 60;

export default async function NewsPage() {
  const data = await getNewsList();

  if (!data.length) {
    return (
      <div className={styles.newsContainer}>
        <header className={styles.pageHead}>
          <p className={styles.kicker}>Updates</p>
          <h1>Latest news</h1>
        </header>
        <p className={styles.status}>No news available yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.newsContainer}>
      <header className={styles.pageHead}>
        <p className={styles.kicker}>Updates</p>
        <h1>Latest news</h1>
        <p className={styles.lead}>
          Stories, announcements, and perspectives from across the TARV network.
        </p>
      </header>

      <div className={styles.list}>
        {data.map((item) => (
          <article key={item._id} className={styles.newsItem}>
            <p className={styles.date}>{item.date}</p>
            <h2>
              <Link href={`/news/${item.slug}`}>{item.title}</Link>
            </h2>
            <p className={styles.intro}>
              {item.intro.length > 160
                ? `${item.intro.substring(0, 160).trim()}…`
                : item.intro}
            </p>
            <Link href={`/news/${item.slug}`} className={styles.readMore}>
              Read article
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

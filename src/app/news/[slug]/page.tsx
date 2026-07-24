import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { isSanityConfigured } from "@/sanity/env";
import styles from "./style.module.scss";

export const revalidate = 60;

type PageProps = {
  params: { slug: string };
};

const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset || !isSanityConfigured) return null;
      const src = urlForImage(value).width(1200).height(800).url();
      return (
        <div className={styles.inlineImage}>
          <Image src={src} alt="" width={1200} height={800} />
        </div>
      );
    },
  },
};

function renderVideo(videoUrl?: string) {
  if (!videoUrl) return null;

  const youtubeMatch = videoUrl.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/
  );

  if (youtubeMatch) {
    return (
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeMatch[1]}`}
          title="News video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className={styles.videoWrapper}>
      <video width="100%" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default async function NewsDetailPage({ params }: PageProps) {
  const newsItem = await getNewsBySlug(params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <Link href="/news" className={styles.back}>
        ← All news
      </Link>

      <p className={styles.date}>{newsItem.date}</p>
      <h1>{newsItem.title}</h1>
      <p className={styles.intro}>{newsItem.intro}</p>

      {newsItem.coverImage && isSanityConfigured && (
        <div className={styles.cover}>
          <Image
            src={urlForImage(newsItem.coverImage).width(1400).height(800).url()}
            alt={newsItem.title}
            width={1400}
            height={800}
          />
        </div>
      )}

      {renderVideo(newsItem.videoUrl)}

      {newsItem.body && (
        <div className={styles.body}>
          <PortableText value={newsItem.body} components={portableComponents} />
        </div>
      )}

      {newsItem.externalLink && (
        <p>
          For more detailed information,{" "}
          <a
            href={newsItem.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.external}
          >
            read the full source
          </a>
          .
        </p>
      )}

      {newsItem.conclusion && (
        <div className={styles.conclusion}>
          <h3>Conclusion</h3>
          <p>{newsItem.conclusion}</p>
        </div>
      )}
    </article>
  );
}

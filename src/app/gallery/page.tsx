import Image from "next/image";
import { getGallery } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { isSanityConfigured } from "@/sanity/env";
import { localGalleryItems } from "./data";
import styles from "./style.module.scss";

export const revalidate = 60;

type GalleryCard = {
  id: string;
  title: string;
  caption?: string;
  type: "image" | "video";
  src: string;
  order: number;
};

export default async function GalleryPage() {
  const sanityItems = await getGallery();

  const remoteCards: GalleryCard[] = isSanityConfigured
    ? sanityItems
        .filter((item) => Boolean(item.image))
        .map((item, index) => ({
          id: item._id,
          title: item.title,
          caption: item.caption,
          type: "image" as const,
          src: urlForImage(item.image).width(1200).height(1400).url(),
          order: 1000 + index,
        }))
    : [];

  const cards: GalleryCard[] = [
    ...localGalleryItems.map((item) => ({
      id: item.id,
      title: item.title,
      caption: item.caption,
      type: item.type,
      src: item.src,
      order: item.order,
    })),
    ...remoteCards,
  ].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.page}>
      <header className={styles.pageHead}>
        <p className={styles.kicker}>Visual stories</p>
        <h1>Gallery</h1>
        <p className={styles.lead}>
          Moments from summits, partnerships, and projects across the continent.
        </p>
      </header>

      <div className={styles.masonry}>
        {cards.map((item) => (
          <figure key={item.id} className={styles.item}>
            {item.type === "video" ? (
              <video
                className={styles.video}
                controls
                preload="metadata"
                playsInline
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={item.src}
                alt={item.title}
                width={1000}
                height={1200}
                className={styles.image}
              />
            )}
            <figcaption>
              <strong>{item.title}</strong>
              {item.caption && <span>{item.caption}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

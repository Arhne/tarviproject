import Image from "next/image";
import Link from "next/link";
import { getGallery } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { isSanityConfigured } from "@/sanity/env";
import styles from "./style.module.scss";

export const revalidate = 60;

export default async function GalleryPage() {
  const items = await getGallery();

  return (
    <div className={styles.page}>
      <header className={styles.pageHead}>
        <p className={styles.kicker}>Visual stories</p>
        <h1>Gallery</h1>
        <p className={styles.lead}>
          Moments from summits, partnerships, and projects across the continent.
        </p>
      </header>

      {items.length === 0 ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyLabel}>Coming soon</p>
          <p>
            {isSanityConfigured
              ? "Upload gallery images in Sanity Studio and they will appear here."
              : "Connect Sanity to manage gallery images from /studio."}
          </p>
          <Link href="/contact" className={styles.cta}>
            Contact us
          </Link>
        </div>
      ) : (
        <div className={styles.masonry}>
          {items.map((item) => (
            <figure key={item._id} className={styles.item}>
              {item.image && isSanityConfigured && (
                <Image
                  src={urlForImage(item.image).width(1000).height(1200).url()}
                  alt={item.title}
                  width={1000}
                  height={1200}
                />
              )}
              <figcaption>
                <strong>{item.title}</strong>
                {item.caption && <span>{item.caption}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

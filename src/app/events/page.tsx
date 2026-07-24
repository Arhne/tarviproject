import Image from "next/image";
import Link from "next/link";
import { getEvents } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { isSanityConfigured } from "@/sanity/env";
import styles from "./style.module.scss";

export const revalidate = 60;

function formatDate(value?: string) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className={styles.page}>
      <header className={styles.pageHead}>
        <p className={styles.kicker}>Calendar</p>
        <h1>Events</h1>
        <p className={styles.lead}>
          Dialogues, summits, and partnership forums that bring Africa&apos;s
          investment community together.
        </p>
      </header>

      {events.length === 0 ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyLabel}>No upcoming events listed</p>
          <p>
            {isSanityConfigured
              ? "Add events in Sanity Studio and they will appear here."
              : "Connect Sanity to manage events from /studio, or contact us about partnerships."}
          </p>
          <Link href="/contact" className={styles.cta}>
            Partner with us
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {events.map((event) => (
            <article key={event._id} className={styles.card}>
              {event.coverImage && isSanityConfigured && (
                <div className={styles.media}>
                  <Image
                    src={urlForImage(event.coverImage).width(900).height(600).url()}
                    alt={event.title}
                    width={900}
                    height={600}
                  />
                </div>
              )}
              <div className={styles.content}>
                <p className={styles.meta}>
                  {formatDate(event.startDate)}
                  {event.location ? ` · ${event.location}` : ""}
                </p>
                <h2>{event.title}</h2>
                <p>{event.summary}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

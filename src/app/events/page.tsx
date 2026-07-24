import Image from "next/image";
import Link from "next/link";
import { getEvents } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { isSanityConfigured } from "@/sanity/env";
import { localEvents } from "./data";
import styles from "./style.module.scss";

export const revalidate = 60;

function formatDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  // Prefer year-only display for approximate historic dates using Jan 1
  if (value.endsWith("-01-01")) {
    return date.getFullYear().toString();
  }
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

type DisplayEvent = {
  id: string;
  title: string;
  date: string;
  location?: string;
  summary: string;
  imageSrc?: string;
  statusLabel: string;
};

export default async function EventsPage() {
  const sanityEvents = await getEvents();

  const remote: DisplayEvent[] = isSanityConfigured
    ? sanityEvents.map((event) => ({
        id: event._id,
        title: event.title,
        date: event.startDate,
        location: event.location,
        summary: event.summary,
        imageSrc: event.coverImage
          ? urlForImage(event.coverImage).width(900).height(600).url()
          : undefined,
        statusLabel: new Date(event.startDate) >= new Date() ? "Upcoming" : "Past",
      }))
    : [];

  const local: DisplayEvent[] = localEvents.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    location: event.location,
    summary: event.summary,
    imageSrc: event.image,
    statusLabel: event.status === "upcoming" ? "Upcoming" : "Past",
  }));

  const events = [...local, ...remote].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className={styles.page}>
      <header className={styles.pageHead}>
        <p className={styles.kicker}>Calendar</p>
        <h1>Events</h1>
        <p className={styles.lead}>
          Dialogues, commissioning ceremonies, and partnership forums that have
          shaped TARV&apos;s work across Africa.
        </p>
      </header>

      {events.length === 0 ? (
        <div className={styles.emptyState}>
          <p className={styles.emptyLabel}>No events listed yet</p>
          <p>
            Event listings will appear here as they are announced. For speaking
            invitations or partnership opportunities, get in touch.
          </p>
          <Link href="/contact" className={styles.cta}>
            Partner with us
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {events.map((event) => (
            <article key={event.id} className={styles.card}>
              {event.imageSrc && (
                <div className={styles.media}>
                  <Image
                    src={event.imageSrc}
                    alt={event.title}
                    width={900}
                    height={600}
                  />
                </div>
              )}
              <div className={styles.content}>
                <p className={styles.meta}>
                  <span className={styles.status}>{event.statusLabel}</span>
                  {formatDate(event.date)}
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

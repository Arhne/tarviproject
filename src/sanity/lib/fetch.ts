import { promises as fs } from "fs";
import path from "path";
import { isSanityConfigured } from "../env";
import { client } from "./client";
import {
  eventsQuery,
  galleryQuery,
  newsBySlugQuery,
  newsListQuery,
} from "./queries";
import type { PortableTextBlock } from "@portabletext/types";

export type SanityImage = {
  _type?: string;
  asset?: { _ref?: string; _type?: string };
};

export type NewsListItem = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  intro: string;
  coverImage?: SanityImage;
  externalLink?: string;
};

export type NewsArticle = NewsListItem & {
  body?: PortableTextBlock[];
  conclusion?: string;
  videoUrl?: string;
  images?: string[];
};

export type EventItem = {
  _id: string;
  title: string;
  slug: string;
  startDate: string;
  endDate?: string;
  location?: string;
  summary: string;
  coverImage?: SanityImage;
  coverSrc?: string;
  isFeatured?: boolean;
};

export type GalleryItem = {
  _id: string;
  title: string;
  caption?: string;
  image: SanityImage;
  category?: string;
};

type LegacyNews = {
  id: number;
  title: string;
  date: string;
  intro: string;
  mainContent?: { text: string }[];
  conclusion?: string;
  videoUrl?: string;
  externalLink?: string;
  images?: string[];
};

async function readLegacyNews(): Promise<LegacyNews[]> {
  const filePath = path.join(process.cwd(), "public/data/newsData.json");
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw) as LegacyNews[];
}

async function fetchLegacyNews(): Promise<NewsListItem[]> {
  const data = await readLegacyNews();
  return data.map((item) => ({
    _id: String(item.id),
    title: item.title,
    slug: String(item.id),
    date: item.date,
    intro: item.intro,
    externalLink: item.externalLink,
  }));
}

async function fetchLegacyArticle(slug: string): Promise<NewsArticle | null> {
  const data = await readLegacyNews();
  const item = data.find((entry) => String(entry.id) === slug);
  if (!item) return null;

  return {
    _id: String(item.id),
    title: item.title,
    slug: String(item.id),
    date: item.date,
    intro: item.intro,
    conclusion: item.conclusion,
    videoUrl: item.videoUrl,
    externalLink: item.externalLink,
    images: item.images,
    body: (item.mainContent || []).map((section, index) => ({
      _type: "block",
      _key: `legacy-${index}`,
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: `legacy-span-${index}`,
          text: section.text,
          marks: [],
        },
      ],
    })),
  };
}

export async function getNewsList(): Promise<NewsListItem[]> {
  if (!isSanityConfigured) {
    return fetchLegacyNews();
  }

  try {
    return await client.fetch<NewsListItem[]>(newsListQuery);
  } catch {
    return fetchLegacyNews();
  }
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  if (!isSanityConfigured) {
    return fetchLegacyArticle(slug);
  }

  try {
    const article = await client.fetch<NewsArticle | null>(newsBySlugQuery, {
      slug,
    });
    return article ?? fetchLegacyArticle(slug);
  } catch {
    return fetchLegacyArticle(slug);
  }
}

export async function getEvents(): Promise<EventItem[]> {
  if (!isSanityConfigured) return [];
  try {
    return await client.fetch<EventItem[]>(eventsQuery);
  } catch {
    return [];
  }
}

export async function getGallery(): Promise<GalleryItem[]> {
  if (!isSanityConfigured) return [];
  try {
    return await client.fetch<GalleryItem[]>(galleryQuery);
  } catch {
    return [];
  }
}

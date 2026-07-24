import { groq } from "next-sanity";

export const newsListQuery = groq`
  *[_type == "news"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    date,
    intro,
    coverImage,
    externalLink
  }
`;

export const newsBySlugQuery = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    date,
    intro,
    body,
    conclusion,
    videoUrl,
    coverImage,
    externalLink
  }
`;

export const eventsQuery = groq`
  *[_type == "event"] | order(startDate asc) {
    _id,
    title,
    "slug": slug.current,
    startDate,
    endDate,
    location,
    summary,
    coverImage,
    isFeatured
  }
`;

export const galleryQuery = groq`
  *[_type == "galleryImage"] | order(orderRank asc, _createdAt desc) {
    _id,
    title,
    caption,
    image,
    category
  }
`;

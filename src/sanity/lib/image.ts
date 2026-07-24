import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "../env";
import type { SanityImage } from "./fetch";

const builder = createImageUrlBuilder({
  projectId: projectId || "placeholder",
  dataset,
});

export function urlForImage(source: SanityImage) {
  return builder.image(source);
}

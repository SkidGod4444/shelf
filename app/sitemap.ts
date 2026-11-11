import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lib.saidev.codes",
      lastModified: new Date("2026-11-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

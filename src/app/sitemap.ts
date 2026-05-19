import type { MetadataRoute } from "next";
import { getInsightPosts } from "@/lib/insights";

const baseUrl = "https://glamabyte.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/glama-framework",
    "/about",
    "/insights",
    "/speaking",
    "/connect",
    "/privacy-policy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const insightPages = getInsightPosts().map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...insightPages];
}

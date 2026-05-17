import type { MetadataRoute } from "next";

const baseUrl = "https://glamabyte.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}

import type { MetadataRoute } from "next";
import { allMarketingPages, blogPosts, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["/", "/about", "/services", "/projects", "/contact", "/blog"];

  const staticEntries = staticPaths.map((path) => ({
    url: `${site.domain}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const detailEntries = allMarketingPages.map((page) => ({
    url: `${site.domain}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${site.domain}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...detailEntries, ...blogEntries];
}

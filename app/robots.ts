import type { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/staging", "/test", "/*?*"],
      },
    ],
    sitemap: [
      `${site.domain}/sitemap.xml`,
      `${site.domain}/image-sitemap.xml`,
      `${site.domain}/blog-sitemap.xml`,
    ],
  };
}

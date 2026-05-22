import type { Metadata } from "next";
import { site } from "@/lib/site-data";

export function absoluteUrl(path = "/") {
  return `${site.domain}${path === "/" ? "" : path}`;
}

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: absoluteUrl("/images/og-hospitality.webp"),
          width: 1200,
          height: 630,
          alt: "Premium UK restaurant refurbishment and fit out contractor",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/images/og-hospitality.webp")],
    },
  };
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: absoluteUrl(path),
      },
    ],
  };
}

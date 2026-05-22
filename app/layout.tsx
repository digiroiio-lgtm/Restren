import type { Metadata } from "next";
import "./globals.css";
import { Footer, FloatingCta, Header } from "@/components/site-shell";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Restaurant Refurbishment UK | Premium Hospitality Fit-Out Contractor",
    template: "%s | Restaurant Refurbishment UK",
  },
  description:
    "Restaurant refurbishment UK specialists delivering restaurant fit out, takeaway fit out, hospitality refurbishment and commercial kitchen fit out projects.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: "Restaurant Refurbishment UK | Premium Hospitality Fit-Out Contractor",
    description:
      "UK-based specialist contractor for premium restaurant refurbishment, fit-out and commercial kitchen delivery.",
    url: absoluteUrl("/"),
    images: [
      {
        url: absoluteUrl("/images/og-hospitality.webp"),
        width: 1200,
        height: 630,
        alt: "Restaurant refurbishment and fit out contractor in the UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Refurbishment UK",
    description:
      "Premium UK commercial hospitality refurbishment and fit out delivery.",
    images: [absoluteUrl("/images/og-hospitality.webp")],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  url: site.domain,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  areaServed: "United Kingdom",
  description:
    "Specialist UK contractor for restaurant refurbishment, takeaway fit out, hospitality renovation, and commercial kitchen fit out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full">
      <body className="flex min-h-full flex-col bg-black font-sans text-zinc-100 antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { servicePages } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Hospitality Refurbishment & Fit Out Services",
  description:
    "Explore restaurant refurbishment, takeaway fit out, shopfitting services, and commercial kitchen fit out services across the UK.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema("Services", "/services")),
        }}
      />
      <h1 className="text-4xl font-semibold text-white md:text-5xl">Services</h1>
      <p className="mt-4 text-zinc-300">
        Specialist UK commercial hospitality refurbishment and fit-out services.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {servicePages.map((service) => (
          <Link
            key={service.slug}
            href={`/${service.slug}`}
            className="rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition hover:border-amber-200/40"
          >
            <h2 className="text-xl font-semibold text-white">{service.h1}</h2>
            <p className="mt-2 text-sm text-zinc-400">{service.intro}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

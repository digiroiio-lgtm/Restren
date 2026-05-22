import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Our Hospitality Fit-Out Team",
  description:
    "Learn how our UK restaurant refurbishment and hospitality fit-out team delivers premium commercial projects from £20k to £500k.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema("About", "/about")),
        }}
      />
      <h1 className="text-4xl font-semibold text-white md:text-5xl">
        About Restaurant Refurbishment UK
      </h1>
      <p className="mt-6 text-zinc-300">
        We are a UK commercial hospitality refurbishment specialist focused on
        restaurant refurbishment, takeaway fit out, hospitality renovation, and
        turnkey delivery for owners, investors, and franchise groups.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {[
          "Experienced contractors",
          "Dedicated project management",
          "Fast-track delivery capability",
          "Turnkey construction solutions",
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-white/10 bg-zinc-900/60 p-5 text-zinc-200"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

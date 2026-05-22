import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Book Site Visit or Request Estimate",
  description:
    "Contact our UK hospitality refurbishment team to request an estimate, book a site visit, or discuss a franchise fit-out project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema("Contact", "/contact")),
        }}
      />
      <h1 className="text-4xl font-semibold text-white md:text-5xl">Contact</h1>
      <p className="mt-4 text-zinc-300">
        Book Site Visit • Request Estimate • Quote request forms for UK projects
      </p>
      <form className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-zinc-900/60 p-6 md:grid-cols-2">
        <input
          required
          placeholder="Full name"
          className="rounded-lg border border-white/15 bg-black/40 px-4 py-3"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="rounded-lg border border-white/15 bg-black/40 px-4 py-3"
        />
        <input
          placeholder="Phone"
          className="rounded-lg border border-white/15 bg-black/40 px-4 py-3"
        />
        <input
          placeholder="Project postcode"
          className="rounded-lg border border-white/15 bg-black/40 px-4 py-3"
        />
        <textarea
          placeholder="Describe the project"
          rows={5}
          className="rounded-lg border border-white/15 bg-black/40 px-4 py-3 md:col-span-2"
        />
        <button className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black md:col-span-2">
          Request Estimate
        </button>
      </form>
      <div className="mt-8 text-sm text-zinc-300">
        <p>{site.phone}</p>
        <p>{site.email}</p>
      </div>
    </section>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allMarketingPages } from "@/lib/site-data";
import { absoluteUrl, buildMetadata, breadcrumbSchema } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return allMarketingPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = allMarketingPages.find((entry) => entry.slug === slug);
    if (!page) {
      return {};
    }
    return buildMetadata({
      title: page.title,
      description: page.intro,
      path: `/${page.slug}`,
    });
  });
}

export default async function MarketingDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = allMarketingPages.find((entry) => entry.slug === slug);
  if (!page) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: page.h1,
    provider: {
      "@type": "LocalBusiness",
      name: "Restaurant Refurbishment UK Ltd",
      url: absoluteUrl("/"),
    },
    areaServed: "United Kingdom",
    url: absoluteUrl(`/${page.slug}`),
    description: page.intro,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(page.h1, `/${page.slug}`)),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-4xl font-semibold text-white md:text-5xl">{page.h1}</h1>
      <p className="mt-5 max-w-4xl text-zinc-300">{page.intro}</p>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
          <h2 className="text-2xl font-semibold text-white">Benefits</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
            {page.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
          <h2 className="text-2xl font-semibold text-white">Process</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-300">
            {page.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-white/10 bg-zinc-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Project examples</h2>
        <ul className="mt-4 space-y-2 text-zinc-300">
          {page.projects.map((project) => (
            <li key={project}>• {project}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-xl border border-white/10 bg-zinc-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">FAQs</h2>
        <div className="mt-4 space-y-4">
          {page.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <p className="mt-1 text-zinc-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-amber-200/20 bg-zinc-900 p-6">
        <h2 className="text-2xl font-semibold text-white">Ready to start?</h2>
        <p className="mt-2 text-zinc-300">
          {page.cta} with our UK hospitality refurbishment team today.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black hover:bg-amber-300"
          >
            {page.cta}
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            View Projects
          </Link>
        </div>
      </section>
    </article>
  );
}

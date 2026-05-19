import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHero, Section } from "@/components/site/Section";
import { getInsightPost, getInsightPosts, markdownToHtml } from "@/lib/insights";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getInsightPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/insights/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/insights/${post.slug}`,
      images: [post.image],
    },
  };
}

export default async function InsightPostPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = getInsightPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Glamabyte",
    },
    publisher: {
      "@type": "Organization",
      name: "Glamabyte",
    },
    image: post.image,
    mainEntityOfPage: `https://glamabyte.com.au/insights/${post.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero
        overline={post.category}
        title={post.title}
        copy={post.description}
        image={post.image}
      />

      <Section>
        <article className="article-content mx-auto max-w-3xl">
          <p className="mb-10 font-sans text-xs font-bold uppercase tracking-[0.18em] text-pink">
            {formatDisplayDate(post.date)}
          </p>
          <div dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
          <a href="/insights" className="btn-secondary mt-12">
            Back to insights
          </a>
        </article>
      </Section>

      <CtaBand
        overline="Continue the conversation"
        title="Have a question about this?"
        copy="Glamabyte works with businesses, community groups, and organisations ready to engage with the future of AI consciously and on their own terms."
      />
    </main>
  );
}

function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

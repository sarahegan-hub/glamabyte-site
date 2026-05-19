import type { Metadata } from "next";
import { NewsletterForm } from "@/components/site/Forms";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { getInsightPosts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles, case studies, and conversations from inside Glamabyte's work on AI, transformation, and change.",
};

export default function InsightsPage() {
  const posts = getInsightPosts();

  return (
    <main>
      <PageHero
        overline="Insights"
        title="Real thinking. Real conversations. Real change."
        copy="Articles, case studies, and conversations from the human perspective."
        image="/assets/insights-brain.webp"
      />

      <Section>
        <SectionHeading overline="All posts" title="New thinking lands here regularly." />
        {posts.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="card p-6">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-pink">
                  {post.category} | {formatDisplayDate(post.date)}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brilliance">
                  <a href={`/insights/${post.slug}`} className="hover:text-pink">
                    {post.title}
                  </a>
                </h2>
                <p className="mt-5 text-sm leading-7 text-brilliance/74">{post.description}</p>
                <a href={`/insights/${post.slug}`} className="mt-7 inline-block text-sm font-bold uppercase tracking-[0.16em] text-aqua hover:text-pink">
                  Read insight
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-pink/30 bg-[radial-gradient(circle_at_85%_15%,rgba(217,46,133,0.22),transparent_16rem)] p-8 sm:p-10">
            <p className="max-w-2xl text-lg leading-8 text-brilliance/78">
              New thinking lands here regularly. Subscribe to be the first to read it.
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-aqua">
              Coming Soon: Subscribe below to stay connected.
            </p>
          </div>
        )}
      </Section>

      <Section className="border-t border-pink/20">
        <SectionHeading
          overline="Stay in the conversation"
          title="Subscribe."
          copy="No spam, no AI hype, no cookie cutter content. Just thinking worth your time and a commitment to continued conversations."
        />
        <div className="mt-8 max-w-5xl">
          <NewsletterForm />
        </div>
      </Section>
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

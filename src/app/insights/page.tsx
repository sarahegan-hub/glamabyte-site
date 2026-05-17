import type { Metadata } from "next";
import { NewsletterForm } from "@/components/site/Forms";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles, case studies, and conversations from inside Glamabyte's work on AI, transformation, and change.",
};

export default function InsightsPage() {
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
        <div className="mt-10 border border-pink/30 bg-[radial-gradient(circle_at_85%_15%,rgba(217,46,133,0.22),transparent_16rem)] p-8 sm:p-10">
          <p className="max-w-2xl text-lg leading-8 text-brilliance/78">
            New thinking lands here regularly. Subscribe to be the first to read it.
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-aqua">
            Coming Soon: Subscribe below to stay connected.
          </p>
        </div>
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

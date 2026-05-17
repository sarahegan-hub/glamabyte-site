import type { Metadata } from "next";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "GLAMA Transformation Framework",
  description:
    "The GLAMA Transformation Framework is built for humans navigating AI, change, and the changing world we live in.",
};

const reasons = [
  {
    title: "It starts with clarity.",
    copy: "Every engagement begins by understanding where you are now, what you are navigating, and what you would like your future to look like.",
  },
  {
    title: "It is curated for the audience.",
    copy: "It is delivered with clarity and intent, focused specifically for the people ready to engage with it.",
  },
  {
    title: "It keeps humans at the centre.",
    copy: "It is intentionally designed to create ripple effects that leave people, communities, and industries better than we found them.",
  },
];

export default function GlamaFrameworkPage() {
  return (
    <main>
      <PageHero
        overline="Our proprietary methodology"
        title="GLAMA™ Transformation Framework."
        copy="A framework built for humans navigating the changing world we live in."
        image="/assets/glama-framework.webp"
      />

      <Section>
        <SectionHeading overline="What it is" title="What is GLAMA." />
        <div className="mt-8 max-w-4xl space-y-5 text-lg leading-9 text-brilliance/76">
          <p>
            The GLAMA Transformation Framework is our proprietary five stage Transformation
            Framework. Originally created and tested for an SME audience with proven success,
            Sarah has now further curated the framework intentionally as an adaptive model,
            enabling it to be effective across a broader range of transformations both personal
            and professional. It has now been proven across personal, career, and multiple types
            of business transformation.
          </p>
          <p>
            The framework draws on theory, learnings, and frameworks absorbed over more than a
            decade leading large-scale transformation within complex and highly regulated
            environments, alongside lived experience of personal transformation, and a deep
            understanding of change management, communications, and customer experience. It
            encompasses the patterns and disciplines that shape successful large-scale
            transformations in easy to digest and apply modules.
          </p>
          <p>
            At its heart is our philosophy: Transformation is a human conversation first. Across
            transformations the core framework remains consistent, with each engagement molded to
            meet people where they are at and guide forward movement toward the desired outcomes.
          </p>
        </div>
      </Section>

      <Section className="border-y border-pink/20">
        <SectionHeading overline="Experience the difference" title="Clarity, audience, and human impact." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="card p-7">
              <h2 className="font-display text-3xl font-bold text-brilliance">{reason.title}</h2>
              <p className="mt-5 leading-8 text-brilliance/74">{reason.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand overline="Ready to amplify" title="Ready to amplify your brilliance." />
    </main>
  );
}

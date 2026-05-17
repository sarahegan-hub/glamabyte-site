import type { Metadata } from "next";
import { brand, values } from "@/lib/site-content";
import { CtaBand, PageHero, Section, SectionHeading, TeamGrid, ValueGrid } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Glamabyte exists to create space for the future of human brilliance through ethical, human-centred technology adoption.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        overline="About Glamabyte"
        title="Amplifying Human Brilliance."
        copy={brand.mission}
        image="/assets/glamabyte-logo.webp"
      />

      <Section>
        <SectionHeading overline="Vision & values" title="A future shaped intentionally." />
        <div className="mt-8 max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-brilliance">Our Vision</h2>
          <p className="mt-5 text-lg leading-9 text-brilliance/76">
            The future should be shaped by human hearts, minds, and values. At Glamabyte, we
            understand that adoption of advanced technology is inevitable but doing it on
            autopilot is not. We exist to demystify emerging technologies with precision, create
            and enable human first future-focused transformation experiences with uncompromising
            integrity, and empower the design of commercially strong, scalable, human-centric
            technology with purpose.
          </p>
        </div>
        <ValueGrid items={values} />
      </Section>

      <Section className="border-y border-pink/20">
        <SectionHeading
          overline="Our heartbeat"
          title="Meet The Glamabyte Team"
          center
        />
        <TeamGrid spacious />
      </Section>

      <CtaBand
        overline="What's next"
        title="Glamabyte is a growing business with soul."
        copy="A growing body of work. A widening circle of partners, collaborators, and clients. A clearer view, day by day, of what becomes possible when modern technology is approached with intention and integrity. The work is not for everyone. It is built for those ready to engage with the future on their own terms. If that is you, let's talk."
      />
    </main>
  );
}

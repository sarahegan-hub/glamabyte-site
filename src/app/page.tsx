import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, CtaLink, PageHero, Section, SectionHeading } from "@/components/site/Section";

export const metadata: Metadata = {
  title: {
    absolute: "Glamabyte | Amplifying Human Brilliance",
  },
  description:
    "Glamabyte translates between boardrooms and backyards so people, businesses, and communities can engage with AI consciously.",
};

export default function Home() {
  return (
    <main>
      <PageHero
        overline="Welcome to Glamabyte"
        title="Adoption of AI is a human conversation."
        copy="Engage with the future intentionally."
        image="/assets/mother-daughter.webp"
        cta={{ label: "Start a conversation", href: "/connect" }}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/assets/globe.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="image-fade object-contain p-6 sm:p-10"
            />
          </div>
          <div className="lg:pl-4">
            <SectionHeading
              overline="What we do"
              title="Human potential, emerging technology, and the clarity to move forward."
            />
            <div className="mt-7 grid gap-5 text-base leading-8 text-brilliance/76">
              <p>
                Glamabyte unites human potential with emerging technology. We
                translate between the boardrooms and the backyards. We help people, businesses,
                and communities think more clearly about technology, engage with change more
                consciously, and build futures where human brilliance remains at the centre.
              </p>
              <p>
                Adoption is inevitable but doing it on autopilot is not. The future should be
                shaped intentionally, transparently, and with people at the heart of the transition.
              </p>
            </div>
            <div className="mt-8">
              <CtaLink href="/glama-framework" variant="secondary">
                See how we do it
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-pink/20">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading overline="Proud to be different" title="Ten percent of our time, given back." />
            <div className="mt-8 space-y-5 text-lg leading-9 text-brilliance/76">
              <p>
                The power of transformation and modern technology adoption that will
                inevitably change society as we know it is not a privilege. It must be equally
                accessible.
              </p>
              <p>
                Glamabyte honours that through giving 10% of our time back to community
                initiatives, awareness, and education.
              </p>
              <p>
                We invite the opportunity to collaborate on or participate in initiatives that
                support the community. If you think we could add value or assist you in solving a
                real-world problem, let's connect.
              </p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/assets/give-back.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="image-fade object-cover"
            />
          </div>
        </div>
      </Section>

      <CtaBand
        overline="Ready when you are"
        title="Start a conversation."
        copy="Glamabyte exists for the moment you decide to engage with the future intentionally. All it takes is a conversation. Reach out. We will take it from there."
      />
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { SpeakingForm } from "@/components/site/Forms";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { speakingTopics } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Speaking & Media",
  description:
    "Sarah Egan speaks on AI, transformation, change, and what it actually takes to bring people with you.",
};

const experience = [
  "20 years in the energy industry including 10 years leading transformation",
  "Operations, customer experience, and large-scale systemic change",
  "End-to-end experience across strategy, transformation, project management, business architecture, and change adoption",
  "Delivered measurable transformation outcomes, including major reductions in operational complexity, customer friction, and workload",
  "Lean Six Sigma Black Belt with a focus on practical, sustainable improvement",
  "Diploma of Business and Project Management",
  "Diploma of Artificial Intelligence in progress",
  "Deep experience successfully embedding change from frontline teams through to executive leadership",
  "Experience working across globally distributed workforces",
];

const truthPoints = [
  "AI is not the solution. It is both the amplifier and the distractor",
  "Some people are so focused on keeping up with adoption they are stuck solving the wrong problems, some are being left behind, and some are simply choosing not to engage, each carries its own risk",
  "Adoption and scale are inevitable, but people should be at the heart of the transition",
  "We are responsible for defining the outcomes for our lives, our businesses, and the communities we engage in",
];

const contemplationPoints = [
  "What is hype or distraction",
  "Where AI has the potential to truly amplify human capability",
  "Where modern technology introduces risk",
  "What the potential impacts of unconscious adoption might look like",
  "Where we need to question things more deeply",
];

const sessionFormats = [
  "Keynote talks for conferences, summits, council events, industry forums, and community groups",
  "Group workshops across half-day, full-day, or multi-day formats",
  "Small group immersive sessions for leadership teams, founder cohorts, and community groups",
  "One-to-one conversations across strategic advisory, transformation assurance, fractional transformation leadership, coaching, and mentoring",
  "Bespoke sessions, multi-session bookings, and speaker series designed around your audience, timeline, and goals",
];

export default function SpeakingPage() {
  return (
    <main>
      <PageHero
        overline="Speaking & media"
        title="It's time for human conversations."
        copy="Sarah Egan speaks on AI, transformation, change, and what it actually takes to bring our desired outcomes to life. Keynotes, workshops, and the rooms where the real questions get asked."
        image="/assets/community.webp"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden border border-pink/25">
            <Image
              src="/assets/sarah-black-white.webp"
              alt="Sarah Egan"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="image-fade object-cover"
            />
          </div>
          <div>
            <SectionHeading
              overline="Experience"
              title="A grounded voice for the rooms where real adoption decisions happen."
              copy="Sarah believes the biggest challenge with AI isn't the technology itself, it's the disconnects. The disconnect between the conversations in the boardrooms and the ones in backyards. The disconnect between what's being built and what's being sold to people. The disconnect between the value being promised and the true cost of delivering. And most importantly, the disconnect between people who are actively adopting and those for whom adoption is not reality."
            />
            <p className="mt-6 text-base leading-8 text-brilliance/76">
              Sarah understands that people don't need more AI hype. They need clarity, context,
              and an advocate willing to have honest conversations at all levels about what this
              technology means for real people, real businesses, and real communities.
            </p>
            <ul className="diamond-bullet-list mt-8">
              {experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-y border-pink/20">
        <SectionHeading overline="Adoption isn't optional. Being on autopilot is." title="The truth is human." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card p-7">
            <ul className="diamond-bullet-list">
              {truthPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <p className="text-base leading-8 text-brilliance/76">
              Sarah creates safe and engaging space for people to contemplate:
            </p>
            <ul className="diamond-bullet-list mt-5">
              {contemplationPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          overline="Topics"
          title="A sample of the conversations Sarah leads."
          copy="We are proud to do things differently at Glamabyte. Each engagement is crafted with the audience and outcomes in mind. Below are some samples to get you thinking."
        />
        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-7">
          {speakingTopics.map((topic, index) => (
            <article key={topic.title} className="card min-w-[18rem] snap-start p-6 sm:min-w-[24rem] lg:min-w-[28rem]">
              <p className="text-sm font-bold text-pink">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-brilliance">{topic.title}</h2>
              <p className="mt-4 text-sm leading-7 text-brilliance/72">{topic.copy}</p>
            </article>
          ))}
        </div>
        <div className="h-1 w-full overflow-hidden bg-brilliance/10" aria-hidden="true">
          <div className="h-full w-1/2 bg-pink shadow-[0_0_18px_rgba(217,46,133,0.8)]" />
        </div>
        <p className="mt-8 max-w-4xl text-base leading-8 text-brilliance/76">
          These sessions are designed to be engaging, interactive, and suitable for everyone in
          the community. They are not technically focused, and we promise to avoid jargon. We
          invite questions, participate openly in discussions, and value different perspectives.
          How could we support the right conversations and outcomes for you?
        </p>
      </Section>

      <Section className="border-y border-pink/20">
        <SectionHeading
          overline="How we work with you"
          title="We choose not to work with limits."
          copy="While our work does tend to circle around common formats, we prefer to collaborate on unique engagements that support your outcomes."
        />
        <ul className="diamond-bullet-list mt-10">
          {sessionFormats.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8 text-lg text-brilliance/78">We welcome you to reach out for a chat anytime.</p>
      </Section>

      <Section className="border-t border-pink/20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            overline="Book Sarah"
            title="Let's start the conversation."
            copy="We invite conversation and collaboration from across the community. Solving a challenge, contributing to the conversations, supporting adoption, ready to transform, we start every interaction with a simple question: How can we help? We will be in touch within two business days."
          />
          <SpeakingForm />
        </div>
      </Section>
    </main>
  );
}

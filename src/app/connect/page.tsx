import type { Metadata } from "next";
import { ConnectForm } from "@/components/site/Forms";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Start a conversation with Glamabyte about AI, modern technology, and human-centred transformation.",
};

const audience = [
  "Are ready to lead change",
  "Are thinking about AI and modern technology but are not sure where to start",
  "Want clarity without the hype, fear, or hard sell",
  "Are starting conversations with members of the community",
  "Want to engage and empower people in their communities through a conversation",
];

const faqs = [
  {
    question: "Should I be worried about AI?",
    answer:
      "AI is changing how Australians and the world live, work, learn, and make decisions. In our opinion, the thing we should be worried about is people who are disengaged from the conversation entirely. At a time when decisions are being made about the future of our society and the technology that should serve it, awareness and advocacy are essential. That means staying informed, asking hard questions, and making conscious choices. At Glamabyte, we are intentionally creating space for the future of human brilliance. To us, this means educating people on AI, how it works, and the risks, benefits, and costs, especially beyond dollars and cents.",
  },
  {
    question: "Will AI take my job?",
    answer:
      "AI is fundamentally changing the core systems our society operates within. This will lead to disruption and displacement. AI is more likely to change how your job is done than replace the job entirely, and the people who engage with it consciously will shape that change rather than be shaped by it. The bigger risk is staying still while the work around you transforms. Glamabyte works with individuals, businesses, and communities to translate what is actually changing, what is hype, and what conscious adoption looks like in practice.",
  },
  {
    question: "How is AI changing Australian businesses and communities?",
    answer:
      "AI adoption in Australia is uneven. Current reporting suggests anywhere from 35 to 69 percent of small and medium businesses now use AI in some form, depending on how adoption is defined. However, 76 percent have no formal strategy guiding it. Community groups, councils, and not-for-profits are often left out of the data entirely. The result is a widening gap between the people shaping the future of AI and the people living with the consequences of it. Glamabyte exists to close that gap. We translate what we are hearing from boardrooms into language and conversations that work in backyards, community halls, and local businesses across Australia.",
  },
  {
    question: "How do I know if AI is right for my business, community group, or organisation?",
    answer:
      "AI will likely be useful in most of these spaces, but that does not make it right, and it does not make it something you should simply add into your environment. To truly see the value being promised, you need to engage with and adopt AI thoughtfully. We tend to see the biggest lessons learned around plug and play AI, trying to layer AI on top of broken processes, and adopting AI when strategy is unclear. Before you consider whether AI is right for your business, start by getting honest about your foundations. Ask what you are actually trying to achieve, the best way to achieve it, whether AI can help you achieve it more effectively, and whether you are ready to start this work now. If you start from clarity, you will have a better chance of success. Glamabyte has tools that can help assess readiness. If you could use support or a fresh perspective, let's chat.",
  },
  {
    question: "What are the risks of AI and how do I make sure I am using it responsibly?",
    answer:
      "There are well known and documented risks around data governance, bias in automated decisions, privacy and security exposure, over-reliance on tools that confidently produce wrong answers, and disengagement from the people most affected by the change. Understanding responsible adoption is a great place to start. In Australia, the AI Ethics Principles published by the Department of Industry, Science and Resources set out eight responsible AI commitments including fairness, accountability, transparency, and human oversight. Glamabyte believes there are two fundamental risks that do not get the same level of airtime: unconscious adoption and ungoverned decision making about AI. If you are curious, reach out.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ConnectPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        overline="Connect"
        title="Let's have a conversation."
        copy="Glamabyte works with businesses, community groups, and organisations ready to engage with the future of AI consciously and on their own terms. This is where that conversation begins."
        image="/assets/contact.webp"
      />

      <Section>
        <div className="max-w-4xl">
          <SectionHeading overline="Who we work with" title="Glamabyte connects with people and businesses who are ready for clarity." />
          <ul className="diamond-bullet-list mt-8">
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-brilliance/82">If that's you, then you are in the right place.</p>
        </div>
      </Section>

      <Section className="border-y border-pink/20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            overline="Send a message"
            title="Tell us a little about you."
            copy="At Glamabyte, every engagement starts with a personal, two-way conversation. There are no silly questions, and no cookie cutter responses. Complete the form below to begin. We read every message personally. Expect a reply within two business days."
          />
          <ConnectForm />
        </div>
      </Section>

      <Section>
        <SectionHeading
          overline="FAQ"
          title="Straight answers for the questions people are asking."
          copy="AI adoption creates practical, human, and operational questions. These are a few of the conversations we are having most often."
        />
        <div className="mt-10 grid gap-5">
          {faqs.map((faq) => (
            <details key={faq.question} className="card group p-6">
              <summary className="cursor-pointer list-none font-display text-2xl font-bold text-brilliance">
                <span className="flex items-start justify-between gap-5">
                  <span>{faq.question}</span>
                  <span className="mt-1 text-3xl leading-none text-pink" aria-hidden="true">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-5 text-base leading-8 text-brilliance/76">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </main>
  );
}

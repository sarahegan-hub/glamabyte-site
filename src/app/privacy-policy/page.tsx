import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Glamabyte collects, uses, stores, and protects personal information.",
};

const policySections = [
  {
    title: "1. What we collect",
    groups: [
      {
        label: "Information you give us",
        items: [
          "Your name, email address, and contact details",
          "Business information: company name and your role",
          "Project requirements, preferences, and communications",
          "Payment and billing information",
          "Any feedback or messages you send us",
        ],
      },
      {
        label: "Information collected automatically",
        items: [
          "IP address, browser type, and device details",
          "Pages visited and time spent on our site",
          "Referral source",
        ],
      },
    ],
  },
  {
    title: "2. How we use your information",
    items: [
      "To deliver the services you engaged us for",
      "To communicate about your project and updates",
      "To process payments and keep accurate records",
      "To meet legal and regulatory requirements",
      "To improve our services with your consent only: to send occasional service updates",
      "We never sell your data to third parties. Ever.",
    ],
  },
  {
    title: "3. How we protect your information",
    items: [
      "Multi-factor authentication on every system that touches your data",
      "Encryption of data in transit and at rest",
      "Regular security updates and monitoring",
      "Least-privilege access: team members only access data they genuinely need",
      "Secure disposal when information is no longer required",
    ],
  },
  {
    title: "4. Where we store your data",
    items: [
      "Your data stays in Australia.",
      "We choose tools and platforms with Australian data centres",
      "If we ever process data outside Australia, we will tell you first and ensure appropriate safeguards are in place",
      "You can request confirmation of data storage locations at any time",
      "Glamabyte uses AI tools including Claude from Anthropic and ChatGPT from OpenAI to assist with internal work. Where work is conducted for your project using these tools, we apply our AI Tools and Usage Policy, including data de-identification before processing. You will be notified of AI tool use in your deliverables and can request full details at any time.",
    ],
  },
  {
    title: "5. Who we share your information with",
    items: [
      "You have given us permission",
      "It is needed to deliver the services you requested",
      "We are legally required to",
      "It is needed to protect someone's rights or safety",
      "Any trusted service providers we use are held to the same standards we hold ourselves to.",
    ],
  },
  {
    title: "6. Your rights",
    items: [
      "Access: ask to see what data we hold about you",
      "Correct: request fixes to anything inaccurate",
      "Delete: ask us to remove your data, where legally possible",
      "Opt out: stop marketing communications at any time",
      "Complain: contact the Office of the Australian Information Commissioner at oaic.gov.au",
      "To use any of these rights: hello@glamabyte.com.au",
    ],
  },
  {
    title: "7. Cookies",
    items: [
      "Our website uses cookies to improve your experience and help us understand how people use the site",
      "You can control cookies in your browser settings",
      "Some features may not work fully if cookies are switched off",
    ],
  },
  {
    title: "8. When this policy changes",
    items: [
      "We review this policy every year",
      "We will notify you by email or website notice if anything significant changes",
      "The effective date always shows when the latest version was published",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        overline="Privacy Policy"
        title="How Glamabyte protects your information."
        copy="Version 2.1. April 2026. Glamabyte Pty Ltd ATF Egan Family Trust."
        image="/assets/globe.webp"
      />

      <Section>
        <SectionHeading
          overline="Public policy"
          title="How we collect, use, and protect your information."
        />
        <div className="mt-12 grid gap-6">
          {policySections.map((section) => (
            <article key={section.title} className="card p-6 sm:p-8">
              <h2 className="font-display text-3xl font-bold text-brilliance">{section.title}</h2>
              {section.groups ? (
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {section.groups.map((group) => (
                    <div key={group.label}>
                      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-pink">
                        {group.label}
                      </h3>
                      <ul className="diamond-bullet-list mt-4">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="diamond-bullet-list mt-6">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-pink/20">
        <div className="card p-6 sm:p-8">
          <SectionHeading overline="Questions" title="We are happy to talk through the details." />
          <p className="mt-6 text-lg leading-8 text-brilliance/76">
            Email{" "}
            <a className="text-pink hover:text-brilliance" href="mailto:hello@glamabyte.com.au">
              hello@glamabyte.com.au
            </a>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}

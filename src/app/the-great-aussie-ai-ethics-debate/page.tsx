import type { Metadata } from "next";
import Image from "next/image";
import { DebateForm, NewsletterForm } from "@/components/site/Forms";

const pageUrl = "/the-great-aussie-ai-ethics-debate";
const pageTitle = "The Great Aussie AI Ethics Debate™";
const pageDescription =
  "A weekly Australian AI ethics debate hosted by Glitch Glamabyte™. Cast your vote, share your take and subscribe for the verdict in Boardrooms to Backyards™.";

export const metadata: Metadata = {
  title: "The Great Aussie AI Ethics Debate™",
  description: pageDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description:
      "Every Aussie loves a good debate. Glitch Glamabyte™ is calling the questions Australia should be asking about AI.",
    url: pageUrl,
    images: ["/assets/ethics-debate/great-aussie-ai-ethics-debate-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description:
      "Every Aussie loves a good debate. Glitch Glamabyte™ is calling the questions Australia should be asking about AI.",
    images: ["/assets/ethics-debate/great-aussie-ai-ethics-debate-logo.png"],
  },
};

const socialLinks = [
  {
    label: "Glitch Instagram",
    href: "https://www.instagram.com/glitchglamabyte/",
  },
  {
    label: "Glitch TikTok",
    href: "https://www.tiktok.com/@glitchglamabyte",
  },
];

const shareUrl = "https://glamabyte.com.au/the-great-aussie-ai-ethics-debate";
const shareText = "Know someone with an opinion? Send them The Great Aussie AI Ethics Debate™.";

const steps = [
  {
    title: "Glitch calls the question.",
  },
  {
    title: "Australia casts a vote.",
  },
  {
    title: "Monitor the pulse on socials.",
  },
  {
    title: "The final verdict lands in the newsletter.",
  },
];

export default function EthicsDebatePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: "https://glamabyte.com.au/the-great-aussie-ai-ethics-debate",
    publisher: {
      "@type": "Organization",
      name: "Glamabyte",
      url: "https://glamabyte.com.au",
    },
  };

  return (
    <main className="bg-obsidian text-brilliance">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <section className="relative isolate overflow-hidden border-b border-pink/25 px-5 py-20 sm:px-8 lg:px-10">
        <DebateAtmosphere />
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.78fr]">
          <div className="relative z-10">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-gold">
              Called by Glitch Glamabyte™.
            </p>
            <div className="mt-7 max-w-4xl">
              <DebateLockup />
            </div>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-brilliance/82 sm:text-xl sm:leading-9">
              <p>Every Aussie loves a good debate.</p>
              <p>So let&apos;s have the ones that actually matter.</p>
              <p>
                This is your opportunity to have a say. Answer the question. Pick a side. Explain
                why. No fence sitting.
              </p>
            </div>
            <p className="mt-8 max-w-xl border-l-4 border-pink pl-5 font-display text-3xl font-black leading-tight text-brilliance sm:text-4xl">
              One question. Two sides. No fence sitting.
            </p>
          </div>
          <div className="relative z-10 min-h-[24rem] lg:min-h-[36rem]" aria-hidden="true">
            <div className="absolute inset-x-8 top-10 h-32 border border-aqua/30 bg-aqua/5 shadow-[0_0_46px_rgba(0,255,255,0.18)]" />
            <div className="absolute bottom-8 left-0 right-0 mx-auto h-[28rem] max-w-[28rem] border border-pink/35 bg-[linear-gradient(135deg,rgba(217,46,133,0.2),rgba(0,255,255,0.08))] shadow-[0_0_70px_rgba(217,46,133,0.28)]" />
            <Image
              src="/assets/ethics-debate/great-aussie-ai-ethics-debate-logo.png"
              alt="The Great Aussie AI Ethics Debate™."
              width={900}
              height={900}
              priority
              className="image-fade absolute left-1/2 top-1/2 max-h-[34rem] w-[min(86vw,34rem)] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_0_46px_rgba(217,46,133,0.5)]"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-gold">
              This week&apos;s debate.
            </p>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight text-brilliance sm:text-5xl">
              Is technology improving or ruining elite sport?
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-9 text-brilliance/78">
              <p>
                AI is entering sport through sensor-filled balls, digital twins, upgraded VAR,
                player tracking, wearable data and AI-supported coaching.
              </p>
              <p>
                At the elite level, this promises faster decisions, clearer calls and fewer
                arguments over what really happened.
              </p>
              <p>But sport is not only played on the world stage.</p>
              <p>
                It is played at local clubs. In school teams. On muddy fields. By children who
                are still learning who they are.
              </p>
              <p>So where is the line?</p>
              <p>
                Are we Amplifying Brilliance, or are we turning sport into another data machine?
              </p>
            </div>
            <div className="mt-8 grid gap-4 border border-aqua/30 bg-aqua/[0.045] p-5 text-base leading-8 text-brilliance/78">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-aqua">
                Voting closes Friday 26 June at 7pm AEST.
              </p>
              <p>
                The verdict lands in the first Boardrooms to Backyards™ newsletter on Monday 29
                June.
              </p>
            </div>
          </div>
          <div id="vote" className="scroll-mt-28 border border-pink/35 bg-brilliance/[0.035] p-6 shadow-[0_0_44px_rgba(217,46,133,0.12)] sm:p-8">
            <h2 className="font-display text-3xl font-bold text-brilliance">
              Vote now.
            </h2>
            <p className="mt-4 text-base leading-8 text-brilliance/72">
              Pick the side closest to your gut. Then tell Glitch why.
            </p>
            <div className="mt-8">
              <DebateForm />
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="scroll-mt-28 border-y border-pink/25 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="border border-aqua/30 bg-aqua/[0.045] p-6 shadow-[0_0_44px_rgba(0,255,255,0.1)] sm:p-8">
            <h3 className="font-display text-3xl font-bold text-brilliance">
              Subscribe for the verdict in Boardrooms to Backyards™.
            </h3>
            <p className="mt-4 text-base leading-8 text-brilliance/72">
              The verdict lands in the first Boardrooms to Backyards™ newsletter on Monday 29 June.
            </p>
            <div className="mt-7">
              <NewsletterForm compact buttonLabel="Subscribe for the verdict." />
            </div>
          </div>
        </div>
      </section>

      <section id="follow-glitch" className="scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <div className="relative aspect-square max-w-xl overflow-hidden border border-pink/25 bg-[radial-gradient(circle_at_50%_45%,rgba(217,46,133,0.24),transparent_18rem)]">
            <Image
              src="/assets/ethics-debate/The Great AI Ethics Debate Logo (2).png"
              alt="Glitch Glamabyte™, the host of The Great Aussie AI Ethics Debate™."
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="image-fade object-contain p-8"
            />
          </div>
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-gold">
              Debate master.
            </p>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight text-brilliance sm:text-5xl">
              Meet Glitch Glamabyte.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-9 text-brilliance/78">
              <p>Glitch does not do polite silence.</p>
              <p>
                She watches the AI conversation move from boardrooms into backyards, classrooms,
                clubs and kitchen tables.
              </p>
              <p>Then she asks the question everyone else is avoiding.</p>
              <p>Not because she wants outrage.</p>
              <p>
                Because the future should not be decided by the loudest vendor, the fastest
                platform or the most confident person in the room.
              </p>
              <p>It should be debated by the people who have to live in it.</p>
            </div>
            <div className="mt-8">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-pink">
                Follow the debate.
              </p>
              <p className="mt-4 text-base leading-8 text-brilliance/72">
                Glitch is stepping into the chair as debate master.
              </p>
              <p className="mt-4 text-base leading-8 text-brilliance/72">
                Her channels will carry the live pulse of each debate: reminders, running
                tensions, result updates and the final verdict trail.
              </p>
              <p className="mt-4 text-base leading-8 text-brilliance/72">
                Follow Glitch for the sparks. Follow Glamabyte for the wider movement.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="border border-brilliance/15 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-aqua hover:border-pink hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="share" className="scroll-mt-28 border-t border-pink/25 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-gold">
              Share this debate.
            </p>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight text-brilliance sm:text-5xl">
              Know someone with an opinion?
            </h2>
            <p className="mt-6 text-lg leading-9 text-brilliance/78">
              Send them the debate.
            </p>
          </div>
          <div className="border border-pink/30 bg-brilliance/[0.035] p-6 sm:p-8">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-pink">
              Page link
            </p>
            <a
              href={shareUrl}
              className="mt-4 block break-words text-base leading-8 text-aqua underline decoration-pink/60 underline-offset-4 hover:text-pink"
            >
              {shareUrl}
            </a>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                className="btn-secondary"
              >
                Share on LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                className="btn-secondary"
              >
                Share on Facebook
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`}
                className="btn-secondary"
              >
                Share by email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-pink/25 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-gold">
            How it works.
          </p>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-brilliance sm:text-5xl">
            How the debate works.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <article key={step.title} className="border border-pink/25 bg-brilliance/[0.035] p-6">
                  <p className="text-sm font-bold text-aqua">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-display text-2xl font-bold text-brilliance">
                    {step.title}
                  </h3>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function DebateLockup() {
  return (
    <div className="relative overflow-hidden border border-pink/35 bg-[linear-gradient(135deg,rgba(217,46,133,0.14),rgba(0,255,255,0.06)_48%,rgba(1,0,0,0.72))] p-5 shadow-[0_0_54px_rgba(217,46,133,0.22)] sm:p-7">
      <div className="absolute inset-x-0 top-0 h-px bg-aqua/70" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-5">
        <Image
          src="/assets/ethics-debate/glamabyte-logo.webp"
          alt="Glamabyte"
          width={132}
          height={122}
          className="h-16 w-auto object-contain"
        />
        <div className="h-14 w-px bg-pink/45" aria-hidden="true" />
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-aqua">
            Glamabyte presents
          </p>
          <h1 className="mt-3 font-display text-5xl font-black leading-[0.9] text-brilliance sm:text-6xl lg:text-7xl">
            The Great Aussie AI Ethics Debate™.
          </h1>
        </div>
      </div>
    </div>
  );
}

function DebateAtmosphere() {
  return (
    <>
      <div className="hero-particles absolute inset-0 -z-30 opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(217,46,133,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(0,255,255,0.11)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(217,46,133,0.28),transparent_22rem),radial-gradient(circle_at_78%_34%,rgba(0,255,255,0.16),transparent_20rem),linear-gradient(180deg,rgba(1,0,0,0.18),#010000_86%)]"
        aria-hidden="true"
      />
    </>
  );
}

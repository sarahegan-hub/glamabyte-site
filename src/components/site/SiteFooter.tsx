import Image from "next/image";
import { brand, navItems } from "@/lib/site-content";
import { NewsletterForm } from "./Forms";

export function SiteFooter() {
  return (
    <footer className="border-t border-pink/25 bg-obsidian px-5 py-16 text-brilliance sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Image
            src={brand.logo}
            alt="Glamabyte"
            width={300}
            height={278}
            className="h-32 w-auto object-contain"
          />
          <p className="mt-4 font-sans text-sm font-bold uppercase tracking-[0.22em] text-pink">
            {brand.tagline}
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-brilliance">
            Stay in the conversation.
          </h2>
          <p className="mt-3 text-sm leading-7 text-brilliance/72">
            Subscribe to receive Insights from Sarah and the Glamabyte team.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl gap-8 border-t border-pink/20 pt-8 lg:grid-cols-3">
        <div>
          <p className="footer-heading">Navigation</p>
          <ul className="mt-4 grid gap-3 text-sm text-brilliance/74">
            {navItems.slice(1).map((item) => (
              <li key={item.href}>
                <a className="hover:text-pink" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-heading">Social links</p>
          <ul className="mt-4 grid gap-3 text-sm text-brilliance/74">
            <li>
              <a
                className="hover:text-pink"
                href="https://www.linkedin.com/company/glamabyte-pty-ltd/?originalSubdomain=au"
              >
                LinkedIn, Glamabyte
              </a>
            </li>
            <li>
              <a className="hover:text-pink" href="https://www.linkedin.com/in/sarah-egan-57593752">
                LinkedIn, Sarah Egan
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Glamabyte essentials</p>
          <div className="mt-4 grid gap-2 text-sm leading-7 text-brilliance/70">
            <p>Glamabyte Pty Ltd ATF Egan Family Trust</p>
            <p>ABN 82 887 137 179</p>
            <p>Location: Melbourne, Australia</p>
            <p>
              Email:{" "}
              <a className="hover:text-pink" href="mailto:hello@glamabyte.com.au">
                hello@glamabyte.com.au
              </a>
            </p>
            <p>
              Phone:{" "}
              <a className="hover:text-pink" href="tel:+61477355119">
                0477 355 119
              </a>
            </p>
            <a className="hover:text-pink" href="/privacy-policy">
              Privacy Policy
            </a>
            <p>© Glamabyte 2026</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl gap-6 text-sm leading-7 text-brilliance/68 lg:grid-cols-2">
        <p>
          Glamabyte is an AI-first company. We use AI in the design, development, and delivery
          of our work, including elements of this website. We do so consciously, intentionally,
          and with humans at every decision point.
        </p>
        <p>
          Glamabyte acknowledges the Traditional Custodians of the lands on which we live and
          work, and pays respect to Elders past, present, and emerging. We acknowledge that
          sovereignty was never ceded.
        </p>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { brand, navItems } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink/20 bg-obsidian/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <a href="/" className="flex w-fit items-center gap-3">
          <Image
            src={brand.logo}
            alt="Glamabyte"
            width={132}
            height={122}
            priority
            className="h-12 w-auto object-contain"
          />
          <span className="sr-only">Glamabyte home</span>
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 font-sans text-xs font-bold uppercase tracking-[0.16em] text-brilliance/78">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://glamabyte.com.au"),
  title: {
    default: "Glamabyte | Amplifying Human Brilliance",
    template: "%s | Glamabyte",
  },
  description:
    "Glamabyte helps people, businesses, and communities engage with AI and modern technology with clarity, structure, and human brilliance at the centre.",
  keywords: [
    "Glamabyte",
    "AI adoption",
    "modern technology",
    "transformation",
    "human-centred technology",
    "Sarah Egan",
    "GLAMA Transformation Framework",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Glamabyte | Amplifying Human Brilliance",
    description:
      "Human-centred AI adoption, transformation, speaking, and community education from Glamabyte.",
    url: "https://glamabyte.com.au",
    siteName: "Glamabyte",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

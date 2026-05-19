import fs from "node:fs";
import path from "node:path";

export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  content: string;
};

const insightsDirectory = path.join(process.cwd(), "content", "insights");

export function getInsightPosts(): InsightPost[] {
  if (!fs.existsSync(insightsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(insightsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(insightsDirectory, fileName);
      const source = fs.readFileSync(filePath, "utf8");
      return parsePost(fileName, source);
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getInsightPost(slug: string): InsightPost | undefined {
  return getInsightPosts().find((post) => post.slug === slug);
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(`<h3>${formatInline(line.slice(4))}</h3>`);
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(`<h2>${formatInline(line.slice(3))}</h2>`);
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("> ")) {
        quoteLines.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push(`<blockquote>${formatInline(quoteLines.join(" "))}</blockquote>`);
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(`<li>${formatInline(lines[index].trim().slice(2))}</li>`);
        index += 1;
      }
      blocks.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length && lines[index].trim()) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push(`<p>${formatInline(paragraphLines.join(" "))}</p>`);
  }

  return blocks.join("");
}

function parsePost(fileName: string, source: string): InsightPost {
  const fileSlug = fileName.replace(/\.md$/, "");
  const frontMatterMatch = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const frontMatter = frontMatterMatch ? parseFrontMatter(frontMatterMatch[1]) : {};
  const content = frontMatterMatch ? frontMatterMatch[2].trim() : source.trim();
  const slug = frontMatter.slug ?? slugify(fileSlug);

  return {
    slug,
    title: frontMatter.title ?? titleFromSlug(slug),
    description: frontMatter.description ?? "",
    date: frontMatter.date ?? new Date().toISOString().slice(0, 10),
    category: frontMatter.category ?? "Insight",
    image: frontMatter.image ?? "/assets/insights-brain.webp",
    content,
  };
}

function parseFrontMatter(frontMatter: string): Record<string, string> {
  return frontMatter.split("\n").reduce<Record<string, string>>((fields, line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      return fields;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

    if (key) {
      fields[key] = value;
    }

    return fields;
  }, {});
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+\(\d+\)$/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatInline(value: string) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>');
}

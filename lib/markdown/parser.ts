import { remark } from "remark";
import html from "remark-html";

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function extractFootnotes(content: string): {
  content: string;
  footnotes: { term: string; description: string }[];
} {
  const footnoteRegex = /\[([^\]]+)\]\{([^}]+)\}/g;
  const footnotes: { term: string; description: string }[] = [];
  let match;

  while ((match = footnoteRegex.exec(content)) !== null) {
    footnotes.push({
      term: match[1],
      description: match[2],
    });
  }

  // 각주 문법을 HTML로 변환
  const processedContent = content.replace(
    footnoteRegex,
    '<span class="footnote" data-term="$1" data-description="$2">$1</span>'
  );

  return { content: processedContent, footnotes };
}

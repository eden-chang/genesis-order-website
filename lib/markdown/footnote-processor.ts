export interface FootnoteData {
  term: string;
  description: string;
  position: number;
}

export function processFootnotes(text: string): {
  processedText: string;
  footnotes: FootnoteData[];
} {
  const footnotePattern = /\[([^\]]+)\]\{([^}]+)\}/g;
  const footnotes: FootnoteData[] = [];
  let match;
  let position = 0;

  while ((match = footnotePattern.exec(text)) !== null) {
    footnotes.push({
      term: match[1],
      description: match[2],
      position: position++,
    });
  }

  const processedText = text.replace(
    footnotePattern,
    (_, term) => `<footnote data-term="${term}"/>`
  );

  return { processedText, footnotes };
}

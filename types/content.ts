export interface MarkdownFile {
  slug: string;
  content: string;
  frontmatter: Record<string, any>;
}

export interface ParsedContent {
  html: string;
  metadata: ContentMetadata;
  footnotes: FootnoteItem[];
}

export interface ContentMetadata {
  title: string;
  date?: string;
  author?: string;
  section?: string;
  order?: number;
  category?: string;
}

export interface FootnoteItem {
  id: string;
  term: string;
  description: string;
}

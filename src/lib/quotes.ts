/**
 * The first blockquote of a review's markdown, as plain text, for the excerpt
 * on the home page. Reviews have no quote field yet (it depends on the
 * questionnaire's pending answers), so the passage the author already
 * highlighted in her own text is the source.
 */
const QUOTE_LINE = /^\s*>\s?(.*)$/;

export function firstQuote(markdown: string): string | undefined {
  const lines = markdown.split('\n');
  const start = lines.findIndex((line) => QUOTE_LINE.test(line));
  if (start === -1) return undefined;

  const quoteLines: string[] = [];
  for (const line of lines.slice(start)) {
    const match = QUOTE_LINE.exec(line);
    if (!match) break;
    quoteLines.push(match[1] ?? '');
  }

  const text = stripInlineMarkdown(quoteLines.join(' ')).replace(/\s+/g, ' ').trim();
  return text || undefined;
}

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // a link keeps its text
    .replace(/\*\*|__|\*|_|`/g, '');
}

/**
 * Converts markdown to HTML.
 * If the content already looks like HTML, returns as-is for backward-compatibility.
 */
export function markdownToHtml(md: string): string {
  if (/<[a-zA-Z][^>]*>/.test(md)) return md;

  let html = md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>');

  html = html.replace(/^(?!<[a-zA-Z/])([^\n]+)$/gm, '<p>$1</p>');
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}
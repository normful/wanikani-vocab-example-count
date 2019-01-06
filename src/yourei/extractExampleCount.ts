export function extractExampleCount(html: string): number {
  const spanStart = html.indexOf('<span id="num-examples"');
  if (spanStart === -1) {
    return null;
  }

  const spanTextStart = html.indexOf(">", spanStart);
  if (spanTextStart === -1) {
    return null;
  }

  const spanTextEnd = html.indexOf("</span>", spanStart);
  if (spanTextEnd === -1) {
    return null;
  }

  const countString = html
    .substring(spanTextStart + 1, spanTextEnd)
    .replace(/,/g, "");

  const countNumber = Number(countString);
  if (countNumber >= 0) {
    return countNumber;
  }

  return null;
}

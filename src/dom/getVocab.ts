export function getVocab(): string {
  const vocabNode = $("#character");

  if (vocabNode === undefined || vocabNode === null) {
    return null;
  }

  return vocabNode.text().trim();
}

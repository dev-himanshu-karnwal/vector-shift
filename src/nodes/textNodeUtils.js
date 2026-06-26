const VARIABLE_PATTERN = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export function parseTextVariables(text) {
  const variables = [];
  const seen = new Set();

  for (const match of text.matchAll(VARIABLE_PATTERN)) {
    const name = match[1];
    if (!seen.has(name)) {
      seen.add(name);
      variables.push(name);
    }
  }

  return variables;
}

export function getHandleTopPercent(index, total) {
  if (total === 1) return '50%';
  return `${((index + 1) / (total + 1)) * 100}%`;
}

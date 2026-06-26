export function formatHandleLabel(id) {
  if (/^[a-z]$/.test(id)) {
    return id.toUpperCase();
  }

  return id
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function hex2rgba(hex: string, alpha = 1): string {
  const regexResults = hex.match(/\w\w/g);
  if (!regexResults || regexResults.length !== 3) {
    throw new Error(`Error extracting RGB from '${hex}'`);
  }
  const [r, g, b] = regexResults.map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
}

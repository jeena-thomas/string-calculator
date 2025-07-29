export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  const parts = numbers.split(/,|\n/).map(num => parseInt(num));
  return parts.reduce((sum, i) => sum + i, 0);
}

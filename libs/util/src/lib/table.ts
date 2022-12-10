export function boldFormatter<T>(
  value: T[keyof T],
  min?: number,
  max?: number
): boolean {
  if (typeof value !== 'number') return false;

  if (min && value < min) return true;
  if (max && value > max) return true;

  return false;
}

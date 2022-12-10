import { DataFormatter } from '@sebek78-nx/types';

export function valueFormatter<T>(
  value: T[keyof T],
  customFormatter?: DataFormatter
) {
  if (customFormatter) return customFormatter(value);

  if (value instanceof Date) {
    return new Date(value).toLocaleDateString('pl');
  }
  if (typeof value === 'string') return value as string;
  if (typeof value === 'number') return value as number;

  return '';
}

export function valueFormatter2p<T>(value: T[keyof T]) {
  if (typeof value !== 'number') return '';
  if (value === 0) return value.toString();

  return value.toFixed(2);
}

export function valueFormatterZS<T>(value: T[keyof T]) {
  if (typeof value !== 'number') return '';

  let valueWithScore = '';

  if (value < 1.75) valueWithScore += 'D';
  if (value >= 1.75 && value < 2.5) valueWithScore += 'CCC-';
  if (value >= 2.5 && value < 3.2) valueWithScore += 'CCC';
  if (value >= 3.2 && value < 3.75) valueWithScore += 'CCC+';
  if (value >= 3.75 && value < 4.15) valueWithScore += 'B-';
  if (value >= 4.15 && value < 4.5) valueWithScore += 'B';
  if (value >= 4.5 && value < 4.75) valueWithScore += 'B+';
  if (value >= 4.75 && value < 4.95) valueWithScore += 'BB-';
  if (value >= 4.95 && value < 5.25) valueWithScore += 'BB';
  if (value >= 5.25 && value < 5.65) valueWithScore += 'BB+';
  if (value >= 5.65 && value < 5.85) valueWithScore += 'BBB-';
  if (value >= 5.85 && value < 6.25) valueWithScore += 'BBB';
  if (value >= 6.25 && value < 6.4) valueWithScore += 'BBB+';
  if (value >= 6.4 && value < 6.65) valueWithScore += 'A-';
  if (value >= 6.65 && value < 6.85) valueWithScore += 'A';
  if (value >= 6.85 && value < 7) valueWithScore += 'A+';
  if (value >= 7 && value < 7.3) valueWithScore += 'AA-';
  if (value >= 7.3 && value < 7.6) valueWithScore += 'AA';
  if (value >= 7.6 && value < 8.15) valueWithScore += 'AA+';
  if (value >= 8.15) valueWithScore += 'AAA';

  return `${valueWithScore} (${value})`;
}

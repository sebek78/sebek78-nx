import { ThemeTextColorKeys } from '@sebek78-nx/types';

export function colorFormatterPE<T>(value: T[keyof T]): ThemeTextColorKeys {
  if (typeof value !== 'number') return 'default';

  if (value <= 0 || value >= 16) return 'danger';
  if (value >= 12 && value < 16) return 'attention';
  if (value < 8 && value >= 5) return 'success';
  if (value < 5 && value > 0) return 'successEmphasis';

  return 'default';
}

export function colorFormatterTh<T>(
  value: T[keyof T],
  threshold = 0
): ThemeTextColorKeys {
  if (typeof value !== 'number') return 'default';

  if (value > threshold) return 'danger';

  return 'default';
}

export function colorFormatterThSuccess<T>(
  value: T[keyof T],
  threshold = 0
): ThemeTextColorKeys {
  if (typeof value !== 'number') return 'default';

  if (value <= 0) return 'danger';
  if (value >= threshold) return 'success';

  return 'default';
}

export function colorFormatterZS<T>(value: T[keyof T]): ThemeTextColorKeys {
  if (typeof value !== 'number') return 'default';

  if (value <= 4.14) return 'danger';
  if (value > 4.14 && value <= 5.84) return 'attention';

  return 'accent';
}

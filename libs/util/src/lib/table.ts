import { ThemeTextColorKeys } from '@sebek78-nx/types';

export function valueFormatter<T>(value: T[keyof T]) {
  if (value instanceof Date) {
    return new Date(value).toLocaleDateString('pl');
  }
  if (typeof value === 'string') return value as string;
  if (typeof value === 'number') return value as number;

  return '';
}

export function colorFormatter<T>(value: T[keyof T]): ThemeTextColorKeys {
  if (typeof value !== 'number') return 'default';

  if (value > 0) return 'danger';

  return 'default';
}

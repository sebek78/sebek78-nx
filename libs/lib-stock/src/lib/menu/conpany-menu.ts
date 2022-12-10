import { MenuItemType } from '@sebek78-nx/types';

export const companyMenu: MenuItemType[] = [
  {
    to: '/',
    label: 'Panel',
  },
  {
    to: '/companies',
    label: 'Spółki',
  },
  {
    to: '/abc',
    label: 'Dodaj spółkę',
    adminOnly: true,
  },
];

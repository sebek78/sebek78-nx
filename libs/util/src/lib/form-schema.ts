import * as yup from 'yup';
import { AnyObject } from 'yup/lib/types';

export const loginSchema = yup
  .object({
    username: yup
      .string()
      .min(4, 'Wymagane są co najmniej 4 znaki.')
      .max(32, 'Maksymalnie 32 znaki.')
      .required(),
    password: yup
      .string()
      .min(8, 'Wymagane jest co najmniej 8 znaków.')
      .max(40, 'Maksymalnie 40 znaków.')
      .required(),
  })
  .required();

export const registerSchema = yup
  .object({
    username: yup
      .string()
      .min(4, 'Wymagane są co najmniej 4 znaki.')
      .max(32, 'Maksymalnie 32 znaki.')
      .required(),
    password: yup
      .string()
      .min(8, 'Wymagane jest co najmniej 8 znaków.')
      .max(40, 'Maksymalnie 40 znaków.')
      .required(),
    password2: yup
      .string()
      .min(8, 'Wymagane jest co najmniej 8 znaków.')
      .max(40, 'Maksymalnie 40 znaków.')
      .required()
      .oneOf([yup.ref('password')], 'Wpisane hasła są różne.'),
  })
  .required();

export const changePasswordSchema = yup
  .object({
    oldPassword: yup
      .string()
      .min(8, 'Wymagane jest co najmniej 8 znaków.')
      .max(40, 'Maksymalnie 40 znaków.')
      .required(),
    newPassword: yup
      .string()
      .min(8, 'Wymagane jest co najmniej 8 znaków.')
      .max(40, 'Maksymalnie 40 znaków.')
      .required(),
    newPassword2: yup
      .string()
      .min(8, 'Wymagane jest co najmniej 8 znaków.')
      .max(40, 'Maksymalnie 40 znaków.')
      .required()
      .oneOf([yup.ref('newPassword')], 'Wpisane hasła są różne.'),
  })
  .required();

export const deleteUserSchema = yup
  .object({
    username: yup
      .string()
      .min(4, 'Wymagane są co najmniej 4 znaki.')
      .max(32, 'Maksymalnie 32 znaki.')
      .test(
        'username',
        'Zła nazwa użytkownika',
        (value: string | undefined, context: yup.TestContext<AnyObject>) =>
          value === context.options.context?.['username']
      )
      .required(),
  })
  .required();

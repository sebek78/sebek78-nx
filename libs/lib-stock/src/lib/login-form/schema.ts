import * as yup from 'yup';

export const schema = yup
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

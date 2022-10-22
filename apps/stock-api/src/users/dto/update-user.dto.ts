import { MaxLength, MinLength } from 'class-validator';

export class UpdateUserPasswordDto {
  @MinLength(8, {
    // 'New password is too short. At least 8 characters.'
    message: 'Nowe hasło jest za krótkie. Minimim 8 znaków.',
  })
  @MaxLength(40, {
    // 'New password is too long. Maximum 40 characters.'
    message: 'Nowe hasło jest za długie. Maksymalnie 40 znaków',
  })
  oldPassword: string;

  @MinLength(8, {
    message: 'Nowe hasło jest za krótkie. Minimim 8 znaków.',
  })
  @MaxLength(40, {
    message: 'Nowe hasło jest za długie. Maksymalnie 40 znaków',
  })
  newPassword: string;

  @MinLength(8, {
    message: 'Nowe hasło jest za krótkie. Minimim 8 znaków.',
  })
  @MaxLength(40, {
    message: 'Nowe hasło jest za długie. Maksymalnie 40 znaków',
  })
  newPassword2: string;
}

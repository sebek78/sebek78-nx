import { MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MinLength(4, {
    // 'Username is too short. At least 4 characters.'
    message: 'Nazwa użytkownika jest za krótka. Minimim 4 znaki.',
  })
  @MaxLength(32, {
    // 'Username is too long. Maximum 32 characters.'
    message: 'Nazwa uzytkownika jest za długa. Maksymalnie 32 znaki.',
  })
  username: string;

  @MinLength(8, {
    // 'Password is too short. At least 8 characters.'
    message: 'Hasło jest za krótkie. Minimim 8 znaków.',
  })
  @MaxLength(40, {
    // 'Password is too long. Maximum 40 characters.'
    message: 'Hasło jest za długie. Maksymalnie 40 znaków',
  })
  password: string;

  password2: string;
}

import { MaxLength, MinLength } from 'class-validator';

export class DeleteUserDTO {
  @MinLength(4, {
    // 'Username is too short. At least 4 characters.'
    message: 'Nazwa użytkownika jest za krótka. Minimim 4 znaki.',
  })
  @MaxLength(32, {
    // 'Username is too long. Maximum 32 characters.'
    message: 'Nazwa uzytkownika jest za długa. Maksymalnie 32 znaki.',
  })
  username: string;
}

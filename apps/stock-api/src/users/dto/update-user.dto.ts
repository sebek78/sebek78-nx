import { CreateUserDto } from './create-user.dto';
import { MaxLength, MinLength } from 'class-validator';

export class UpdateUserPasswordDto extends CreateUserDto {
  @MinLength(8, {
    // 'New password is too short. At least 8 characters.'
    message: 'Nowe hasło jest za krótkie. Minimim 8 znaków.',
  })
  @MaxLength(40, {
    // 'New password is too long. Maximum 40 characters.'
    message: 'Nowe hasło jest za długie. Maksymalnie 40 znaków',
  })
  newPassword: string;
}

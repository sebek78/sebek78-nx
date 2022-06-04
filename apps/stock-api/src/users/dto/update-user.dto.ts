import { CreateUserDto } from './create-user.dto';
import { MaxLength, MinLength } from 'class-validator';

export class UpdateUserPasswordDto extends CreateUserDto {
  @MinLength(8, {
    // 'Password is too short. At least 8 characters.'
    message: 'Hasło jest za krótkie. Minimim 8 znaków.',
  })
  @MaxLength(40, {
    // 'Password is too long. Maximum 40 characters.'
    message: 'Hasło jest za długie. Maksymalnie 40 znaków',
  })
  newPassword: string;
}

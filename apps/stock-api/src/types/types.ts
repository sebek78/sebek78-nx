import { User } from '@prisma/client';

export type UserData = Pick<User, 'id' | 'username' | 'role'>;
export type TokenPayload = UserData & { iat: number; exp: number };

export interface RequestWithUser extends Request {
  user: UserData;
}

export type UpdateRefreshToken = {
  refreshToken: string;
  refreshExpiresIn: Date;
  lastLogin?: Date;
};

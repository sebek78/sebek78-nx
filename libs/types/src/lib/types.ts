import { Role } from '@prisma/client';

export type UserRole = Role | 'GUEST';

export interface User {
  id: number;
  role: UserRole;
  username: string;
}

export interface ILoginFormInput {
  username: string;
  password: string;
}

export interface IRegisterFormInput {
  username: string;
  password: string;
  password2: string;
}

export interface SuccessResponse {
  success: boolean;
}

export interface RegisterSuccessResponse {
  username: string;
}

export interface LoginSuccess {
  user: User;
}

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

export interface SuccessResponse {
  success: boolean;
}

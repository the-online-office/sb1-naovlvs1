export interface User {
  uid: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: string;
  lastLogin: string;
  role: 'user' | 'admin' | 'manager';
  isEmailVerified: boolean;
}

export interface UserCredentials {
  email: string;
  password: string;
}
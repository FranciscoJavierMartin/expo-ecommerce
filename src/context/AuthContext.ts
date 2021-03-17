import { createContext } from 'react';
import { User } from '../common/models/user';

export interface AuthState {
  auth: User | null;
  login: (user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthState>({
  auth: null,
  login: () => null,
  logout: () => null,
});

export default AuthContext;
import User from '../models/User';
import UserService from './UserService';

const signIn = async (email: string, password: string): Promise<User> => {
  const user = await UserService.getUserByEmailAndPassword(email, password);
  if (!user) {
    throw new Error('User not found or invalid credentials');
  }

  return user;
};

const signUp = async (
  email: string,
  password: string,
  confirmPassword: string,
): Promise<User> => {
  const user = await UserService.getUserByEmail(email);

  if (user) {
    throw new Error('Email is already registered');
  }

  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }

  const createdUser = await UserService.createUser(email, password);
  return createdUser;
};

const AuthService = {
  signIn,
  signUp,
};

export default AuthService;

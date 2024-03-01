import users from '../data/MockedUser';
import User from '../models/User';
import {delay} from '../utils/helpers';

const getUserByEmailAndPassword = async (
  email: string,
  password: string,
): Promise<User | undefined> => {
  return findUser({email, password});
};

const getUserByEmail = async (email: string): Promise<User | undefined> => {
  return findUser({email});
};

const findUser = async ({
  email,
  password,
}: {
  email: string;
  password?: string;
}): Promise<User | undefined> => {
  await delay(1000);

  const user = users.find(user => user.email === email);

  if (!user) return undefined;

  const passwordDoesNotMatch = password && user.password !== password;
  if (passwordDoesNotMatch) return undefined;

  return user;
};
const createUser = async (email: string, password: string): Promise<User> => {
  await delay(1000);
  const newUser: User = {id: Math.random().toString(), email, password};

  users.push(newUser);

  return newUser;
};

const isUserAuthenticated = async (): Promise<boolean> => {
  await delay(1000);
  return Math.random() >= 0.5;
};

const UserService = {
  getUserByEmailAndPassword,
  getUserByEmail,
  createUser,
  isUserAuthenticated,
};

export default UserService;

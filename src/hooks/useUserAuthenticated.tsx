import {useState} from 'react';
import UserService from '../services/UserService';

interface useUserAuthenticated {
  email: string;
  password: string;
}

const useUserAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const isUserAuthenticated = async () => {
    const authenticatedUser = await UserService.isUserAuthenticated();

    setAuthenticated(authenticatedUser);
  };

  return {
    authenticated,
    setAuthenticated,
    isUserAuthenticated,
  };
};
export default useUserAuthenticated;

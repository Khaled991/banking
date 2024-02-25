import {useState} from 'react';
import AuthService from '../services/AuthService';
import {isError} from '../utils/helpers';

const useSignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (text: string) => setEmail(text);
  const handlePasswordChange = (text: string) => setPassword(text);

  const onSignIn = async () => {
    try {
      setLoading(true);
      const user = await AuthService.signIn(email, password);
      if (user) {
        console.log('User found:', user);
        // Proceed with sign-in logic
      }
    } catch (error) {
      if (isError(error)) {
        console.error(error.message);
      }
      console.error('Error signing in:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    loading,
    handleEmailChange,
    handlePasswordChange,
    onSignIn,
  };
};

export default useSignIn;

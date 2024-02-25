import {useState} from 'react';
import AuthService from '../services/AuthService';
import {isError} from '../utils/helpers';

const useSignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (text: string) => setEmail(text);
  const handlePasswordChange = (text: string) => setPassword(text);
  const handleConfirmPasswordChange = (text: string) =>
    setConfirmPassword(text);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const user = await AuthService.signUp(email, password, confirmPassword);
      if (user) {
        console.log('User created successfully');
      }
    } catch (error) {
      if (isError(error)) {
        console.error(error.message);
      }
      console.error('Error signing up:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    confirmPassword,
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    onSignUp,
  };
};

export default useSignUp;

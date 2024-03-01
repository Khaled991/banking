import useUserAuthenticated from './useUserAuthenticated';

const useDashboard = () => {
  const {setAuthenticated} = useUserAuthenticated();

  const onLogout = () => {
    setAuthenticated(false);
  };

  return {
    onLogout,
  };
};

export default useDashboard;

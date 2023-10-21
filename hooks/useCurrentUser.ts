import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const useCurrentUser = () => { //reuse this hook to get current user
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher); //swr teches current from api 

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useCurrentUser;

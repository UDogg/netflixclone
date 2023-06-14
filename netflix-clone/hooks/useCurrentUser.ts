import useSWR from 'swr';
// swr is similar to react query
// by using swr, we do not need redux or any state management to fetch data.
import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default useCurrentUser;

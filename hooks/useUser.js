import useSWR from "swr";

import fetcher from "@/lib/fetcher";

const useUser = (username) => {
  const { data, error, isLoading, mutate } = useSWR(
    username ? `/api/users/${username}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;

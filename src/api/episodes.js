import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints } from '../utils/axios';

export function useGetEpisodes(number) {
  let URL = `${endpoints.episodes}`;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      episodes: data?.results || [],
      episodesInfo: data?.info || {},
      episodesLoading: isLoading,
      episodesError: error,
      episodesValidating: isValidating,
      episodesEmpty: !isLoading && !data?.results,
    }),
    [data?.results, data?.info, error, isLoading, isValidating]
  );

  return memoizedValue;
}
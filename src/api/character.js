import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints } from '../utils/axios';

export function useGetCharacter(
  page,
  search,
  status,
  gender,
  species,
) {
  let URL = `${endpoints.character}?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  const { data, isLoading, error } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      character: data?.results || [],
      characterInfo: data?.info || {},
      characterLoading: isLoading,
      characterError: error,
      characterEmpty: !isLoading && !data?.results.length,
    }),
    [data?.results, data?.info, error, isLoading]
  );

  return memoizedValue;
}

export function useGetGroupCharacter(arrayIDs) {
  let URL = `${endpoints.character}/${arrayIDs}`;
  const { data, isLoading, error } = useSWR(URL, fetcher);

  const memoizedValueGroup = useMemo(
    () => ({
      character: data || [],
      characterLoading: isLoading,
      characterError: error,
      characterEmpty: !isLoading && !data,
    }),
    [data, isLoading, error]
  );

  return memoizedValueGroup;
}
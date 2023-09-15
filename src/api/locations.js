import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints } from '../utils/axios';

export function useGetLocations(number) {
  let URL = `${endpoints.locations}?number=${number}`;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      location: data?.results || [],
      locationInfo: data?.info || [],
      locationLoading: isLoading,
      locationError: error,
      locationValidating: isValidating,
      locationEmpty: !isLoading && !data?.results.length,
    }),
    [data?.results, data?.info, error, isLoading, isValidating]
  );

  return memoizedValue;
}

import { useEffect, useState } from 'react';
import service from '@api';
import { HTTP_METHODS } from '@const/api';

/**
 * The function is a TypeScript hook that fetches data from an API using a specified HTTP method and
 * returns the data, error, and loading status.
 * @param {string} url - A string representing the URL of the API endpoint to be called.
 * @param {'post' | 'get' | 'put' | 'delete'} method - The HTTP method to be used for the API request.
 * It can be one of the following: 'post', 'get', 'put', or 'delete'.
 * @returns An object with three properties: `data`, `error`, and `isLoading`.
 */
const useApi = (url: string, method: 'post' | 'get' | 'put' | 'delete') => {
  if (!url.length) {
    throw new Error(`Url must be defined`);
  }

  if (method !== HTTP_METHODS.POST || HTTP_METHODS.GET || HTTP_METHODS.PUT || HTTP_METHODS.DELETE) {
    throw new Error(`Invalid HTTP method`);
  }

  const [data, setData] = useState<unknown | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service[method](url);
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useApi;

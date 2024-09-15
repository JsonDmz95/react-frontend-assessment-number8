import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiResponse = await fetch(url);
        if (!apiResponse.ok) {
          throw new Error("Error trying to fetch");
        }
        const data = await apiResponse.json();
        setData(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        } else {
            setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

import { useState, useEffect } from "react";

function useFetch<T>(url: string): { loading: boolean; data: T | null } {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!url) return;
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data as T);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data };
}

export default useFetch;

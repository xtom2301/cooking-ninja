import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      const { data } = await axios.get(url, { signal: controller.signal });

      setIsPending(false);
      setData(data);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending };
};

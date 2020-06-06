import { useEffect, useState } from 'react';
import { axiosFetch } from '../API/axios';
import axios from 'axios';

export const useFetch = (url, ...options) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setData(response.data);
    })();
  }, []);

  return { data };
};

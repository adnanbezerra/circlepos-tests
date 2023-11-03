import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function useGetBooksFromAPI({index}) {
  const [data, setData] = useState([{}]);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get(`${API_URL}/book/${index}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error };
}

export default useGetBooksFromAPI;

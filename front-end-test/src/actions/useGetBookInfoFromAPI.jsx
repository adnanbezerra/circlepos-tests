import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function useGetBookInfoFromAPI(index) {
  const [data, setData] = useState([{}]);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get(`${API_URL}/books/${index}`)
      .then(response => {
        setData(response.data.book);
      })
      .catch(error => {
        setError(error);
      });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error };
}

export default useGetBookInfoFromAPI;

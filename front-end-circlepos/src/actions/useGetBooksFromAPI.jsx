import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../mock/apiUrl';

function useGetBooksFromAPI() {
  const [data, setData] = useState([{}]);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get(`${API_URL}/books/`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });

  }, []);

  return { data, error };
}

export default useGetBooksFromAPI;

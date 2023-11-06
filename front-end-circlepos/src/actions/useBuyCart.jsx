import axios from 'axios';
import { API_URL } from '../mock/apiUrl';
import { useState } from 'react';

function useBuyCart() {
  const [success, setSucess] = useState();
  const [error, setError] = useState();

  async function act(cart) {
    cart.forEach(async entry => {
      await postToAPI(entry);
    })
  }

  async function postToAPI(payload) {
    axios.post(`${API_URL}/books/${payload.id}/purchase`)
      .then(response => {
        setSucess(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }

  return { act, success, error };
}

export default useBuyCart;

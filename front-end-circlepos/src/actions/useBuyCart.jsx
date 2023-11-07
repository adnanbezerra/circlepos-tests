import axios from 'axios';
import { API_URL } from '../mock/apiUrl';
import { useState } from 'react';

function useBuyCart() {
  const [success, setSuccess] = useState([]);

  async function act(cart) {
    cart.forEach(async entry => {
      await postToAPI(entry);
    })

    return success.length === cart.length;
  }

  async function postToAPI(payload) {
    axios.post(`${API_URL}/books/${payload.id}/purchase`)
      .then(response => {
        setSuccess([...success, response.data]);
      })
      .catch(error => {
        alert(`There was an error in your purchase! Error message: ${error.message}`);
      });
  }

  return { act };
}

export default useBuyCart;

const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error('Invalid server response');
      }
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then((response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Invalid server response');
      }
    }))
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
      } else {
        throw new Error('Missing jwt token in response');
      }
    });
};

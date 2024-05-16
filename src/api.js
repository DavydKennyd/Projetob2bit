// src/api.js
export const login = (email, password) => {
  return fetch('https://api.homologation.cliqdrive.com.br/auth/login/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json;version=v1_web',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return response.json();
  })
  .then(data => {
    console.log('Aqui estão os dados:', data.tokens.access);
    return { token: data.tokens.access };
  });
};

export const getProfile = (token) => {
  return fetch('https://api.homologation.cliqdrive.com.br/auth/profile/', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json;version=v1_web',
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }
    return response.json();
  });
};

import axios from 'axios';
import { API_KEY } from '@env';

async function authenticate(mode, email, password) {
  console.log(API_KEY);
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate('signUp', email, password);
}

async function login(emial, password) {
  await authenticate('signInWithPassword', emial, password);
}

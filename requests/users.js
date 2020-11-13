import axios from 'axios';
const API_URL = 'http://localhost:4000';

export function signIn(params) {
  return axios({
    method: 'post',
    url: API_URL + '/api/auth',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    data: {...params},
  });
}

export function signUp(params) {
  return axios({
    method: 'post',
    url: API_URL + '/api/users',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    data: {...params},
  });
}
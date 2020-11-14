import axios from 'axios';
const API_URL = 'https://stark-gorge-31321.herokuapp.com';

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
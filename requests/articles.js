import axios from 'axios';
const API_URL = 'http://localhost:4000';

export function allArticles(token) {
  return axios({
    method: 'get',
    url: API_URL + '/api/articles',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    data: {},
  });
}

export function lastArticles(token) {
  return axios({
    method: 'get',
    url: API_URL + '/api/articles/last_articles',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    data: {},
  });
}

export function showArticle(id, token) {
  return axios({
    method: 'get',
    url: API_URL + `/api/articles/${id}`,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    data: {},
  });
}

export function updateArticle(id, params,token) {
  return axios({
    method: 'put',
    url: API_URL + `/api/articles/${id}`,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    data: {...params},
  });
}

export function createArticle(params, token) {
  return axios({
    method: 'post',
    url: API_URL + '/api/articles',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer ${token}`},
    data: {...params},
  });
}
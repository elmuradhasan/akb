import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUserByUsername = async (username: string) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
export const getUserRepos = async (username: string) => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  return response.data;
};

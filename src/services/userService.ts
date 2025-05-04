import axios from 'axios';
import type {  Repositories, User } from "../types/gitTypes";

const API_URL = import.meta.env.VITE_GITHUB_API;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const getUserByUsername = async (username: string): Promise<User> => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};

export const getUserRepos = async (username: string): Promise<Repositories> => {
  const response = await api.get(`/users/${username}/repos?per_page=100`);
  return response.data;
};


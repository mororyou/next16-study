'server-only';

export const API_URL = 'http://localhost:3001';

export const getUsers = async () => {
  const url = `${API_URL}/users`;
  const response = await fetch(url, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return response.json();
};

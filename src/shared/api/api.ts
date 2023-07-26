const BASE_URL = 'https://jsonplaceholder.typicode.com'; // Замените на URL вашего сервера

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};

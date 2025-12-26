// Example API service that would normally fetch from a real backend
export const apiService = {
  // Example function to fetch data from API
  async fetchData(): Promise<{ message: string; data: { id: number; name: string } }> {
    const response = await fetch('/api/example');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  },

  // Example function to fetch users
  async fetchUsers(): Promise<Array<{ id: number; name: string; email: string }>> {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  },

  // Example function to create a user
  async createUser(userData: { name: string; email: string }): Promise<{ id: number; name: string; email: string }> {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  },
};
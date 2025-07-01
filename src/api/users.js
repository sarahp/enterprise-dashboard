import loadingSpinner from "../utils/loadingSpinner";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) {
    loadingSpinner("Failed to fetch users");
  }
  return await res.json();
}

import loadingSpinner from "../utils/loadingSpinner";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchCompanies() {
  const res = await fetch(`${BASE_URL}/companies`);
  if (!res.ok) {
    loadingSpinner("Failed to fetch companies");
  }
  return await res.json();
}

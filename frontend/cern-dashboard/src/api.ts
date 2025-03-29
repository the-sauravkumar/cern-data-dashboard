import axios from "axios";

const API_URL = "http://localhost:8000";

export const fetchCERNData = async (query: string) => {
  const response = await axios.get(`${API_URL}/fetch-data/`, { params: { query } });
  return response.data.results;
};

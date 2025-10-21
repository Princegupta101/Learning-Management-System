import axios from "axios";

// Use Vite environment variable for API URL in development. Create a `.env` in Client with
// VITE_API_URL=http://localhost:5000/api/v1
// If not provided, fall back to the deployed server URL.
const BASE_URL = import.meta.env.VITE_API_URL || "https://lms-server-vd61.onrender.com/api/v1";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

export default axiosInstance;
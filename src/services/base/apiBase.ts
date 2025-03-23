import axios from 'axios';

const baseURL: string = import.meta.env.VITE_BASE_URL;
const timeout: number = +import.meta.env.VITE_TIMEOUT;

const apiBase = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	timeout,
});

export default apiBase;

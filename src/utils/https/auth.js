import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;

export const login = (email, password) => {
	const url = `${baseUrl}/apiv1/auth/login`;
	const body = { email, password };
	return axios.post(url, body);
};

export const register = (email, password, role) => {
	const url = `${baseUrl}/apiv1/auth/register`;
	const body = { email, password, role };
	return axios.post(url, body);
};

export const logout = (token) => {
	const url = `${baseUrl}/apiv1/auth/logout`;
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	return axios.delete(url, config);
};

export const forgotPassword = (email) => {
	const url = `${baseUrl}/apiv1/auth/forgotpass`;
	const body = { email };
	return axios.post(url, body);
};

export const verifyResetPassword = (code) => {
	const url = `${baseUrl}/apiv1/auth/resetpass?verify=${code}`;
	return axios.get(url);
};

export const resetPassword = (code, password) => {
	const url = `${baseUrl}/apiv1/auth/resetpass?verify=${code}`;
	const body = { password };
	return axios.patch(url, body);
};

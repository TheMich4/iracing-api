import { API_URL } from "./consts";
import { CookieJar } from "tough-cookie";
import axios from "axios";
import { wrapper } from "axios-cookiejar-support";

const jar = new CookieJar();

const axiosInstance = wrapper(
	axios.create({
		baseURL: API_URL,
		timeout: 5000,
		headers: {
			"X-Requested-With": "XMLHttpRequest",
			"Content-Type": "application/json",
		},
		jar,
		withCredentials: true,
	}),
);

export { axiosInstance };

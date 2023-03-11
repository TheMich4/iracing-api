import { API_URL } from "./consts.js";
import { CookieJar } from "tough-cookie";
import axios from "axios";
import { wrapper } from "axios-cookiejar-support";

const jar = new CookieJar();

export const createAxiosInstance = () =>
	wrapper(
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

export const axiosInstance = createAxiosInstance();

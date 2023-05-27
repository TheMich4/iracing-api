import axios, { CreateAxiosDefaults } from "axios";

import { API_URL } from "./consts.js";
import { CookieJar } from "tough-cookie";
import { wrapper } from "axios-cookiejar-support";

export type CrateAxiosConfig = Omit<CreateAxiosDefaults, "baseURL">;

export const createJar = () => new CookieJar();

export const createAxiosInstance = (
	jar: CookieJar,
	config?: CrateAxiosConfig,
) =>
	wrapper(
		axios.create({
			...config,
			baseURL: API_URL,
			timeout: config?.timeout ?? 5000,
			headers: {
				"X-Requested-With": "XMLHttpRequest",
				"Content-Type": "application/json",
			},
			jar,
			withCredentials: true,
		}),
	);

export const axiosInstance = createAxiosInstance(createJar());

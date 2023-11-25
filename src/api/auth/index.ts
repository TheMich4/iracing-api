import { API_URL } from "../../consts.js";
import { FetchCookie } from "../../types.js";
import { encryptPassword } from "../../helpers.js";

export const login = async (
	fetchCookie: FetchCookie,
	email: string,
	password: string,
) => {
	const hashPassword = encryptPassword(email, password);

	const response = await fetchCookie(`${API_URL}auth`, {
		body: JSON.stringify({ email, password: hashPassword }),
		cache: "no-cache",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
	});

	if (response.status !== 200) {
		return { error: response.statusText ?? "Failed to login to iracing-api" };
	}

	return await response.json();
};

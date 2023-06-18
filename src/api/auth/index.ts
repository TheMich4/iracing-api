import { axiosInstance } from "../../client.js";
import { encryptPassword } from "../../helpers.js";

export const login = async (email: string, password: string) => {
	const hashPassword = encryptPassword(email, password);

	await axiosInstance.post("/auth", {
		email,
		password: hashPassword,
	});
};

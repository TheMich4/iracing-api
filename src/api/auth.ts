import { axiosInstance } from "../axios";

const login = async (email: string, password: string) => {
	const hashPassword = CryptoJS.enc.Base64.stringify(
		CryptoJS.SHA256(password + email.toLowerCase()),
	);

	return await axiosInstance.post("/auth", {
		email,
		password: hashPassword,
	});
};

export { login };

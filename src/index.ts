import { AxiosInstance } from "axios";
import CryptoJS from "crypto-js";
import { createAxiosInstance } from "./client";
import { getCars } from "./api";

export * from "./api";

export class IracingAPI {
	instance: AxiosInstance;

	constructor() {
		this.instance = createAxiosInstance();
	}

	login = async (email: string, password: string) => {
		const hashPassword = CryptoJS.enc.Base64.stringify(
			CryptoJS.SHA256(password + email.toLowerCase()),
		);

		await this.instance.post("/auth", {
			email,
			password: hashPassword,
		});
	};

	getCars = async () => await getCars(this.instance);
}

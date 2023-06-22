"use server";

import { API_URL, encryptPassword } from "iracing-api";

import { env } from "@/env.mjs";
import makeFetchCookie from "fetch-cookie";

type Service =
	| "car"
	| "carclass"
	| "constants"
	| "hosted"
	| "league"
	| "lookup"
	| "member"
	| "results"
	| "season"
	| "series"
	| "stats"
	| "team"
	| "time_ttack"
	| "track"
	| string;

interface Endpoints {
	[key: Service]: {
		link: string;
		note?: string;
		parameters: {
			[parameter: string]: {
				type: string;
				required?: boolean;
				note?: string;
			};
		};
		expirationSeconds: number;
	};
}

export const getEndpoints = async (): Promise<Endpoints | undefined> => {
	const fetchCookie = makeFetchCookie(fetch);

	const encryptedPassword = encryptPassword(
		env.IRACING_EMAIL,
		env.IRACING_PASSWORD,
	);

	await fetchCookie(`${API_URL}auth`, {
		method: "POST",
		credentials: "include",
		cache: "no-cache",
		body: JSON.stringify({
			email: env.IRACING_EMAIL,
			password: encryptedPassword,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const doc = await fetchCookie(`${API_URL}data/doc`, {
		credentials: "include",
		cache: "no-cache",
	});

	return await doc.json();
};

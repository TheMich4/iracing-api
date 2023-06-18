"use server";

import { env } from "@/env.mjs";
import { API_URL, encryptPassword } from "iracing-api";
import makeFetchCookie from "fetch-cookie";

export const getEndpoints = async () => {
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

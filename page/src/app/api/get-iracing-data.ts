"use server";

import { env } from "@/env.mjs";
import IracingAPI from "iracing-api";

export const getIracingData = async (endpoint: string) => {
  const ir = new IracingAPI();
  await ir.login(env.IRACING_EMAIL, env.IRACING_PASSWORD);

  try {
    return await (ir as any)[endpoint]();
  } catch (error) {
    console.error(`Failed to get data from ${endpoint}`, error);
  }

  return undefined;
};

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    IRACING_EMAIL: z.string(),
    IRACING_PASSWORD: z.string(),
  },
  client: {},
  runtimeEnv: process.env,
});

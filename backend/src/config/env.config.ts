import { getEnv } from "../utils/get-env.js";

const envConfig = () => ({
     NODE_ENV: getEnv("NODE_ENV","development"),
     PORT: getEnv("PORT","3000"),
     MONGO_URI: getEnv("MONGO_URI"),
     JWT_SECRET: getEnv("JWT_SECRET", "secret_jwt"),
     JWT_EXPIRES_IN: getEnv("JWT_EXPIRES_IN", "15m") as string ,

     JWT_REFRESH_SECRET: getEnv("JWT_REFRESH_SECRET", "secret_refresh_jwt"),
     JWT_REFRESH_EXPIRES_IN: getEnv("JWT_REFRESH_EXPIRES_IN", "7d") as string ,

     GEMINI_API_KEY: getEnv("GEMINI_API_KEY"),
     BASE_PATH: getEnv("BASE_PATH","/api"),

     FRONTEND_URL: getEnv("FRONTEND_URL", "localhost"),
})

export const Env = envConfig();
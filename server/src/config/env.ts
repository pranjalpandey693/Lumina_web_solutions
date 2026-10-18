import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 5050,
  mongoUri:
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pranjal_portfolio",
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
};

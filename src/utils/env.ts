import dotenv from "dotenv";
dotenv.config();

const envs = {
  ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY!,
  MONGO_URI: process.env.MONGO_URI!,

  ETH_BLOCK_FROM: parseInt(process.env.ETH_BLOCK_FROM!),
};

export default envs;

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";
dotenv.config();
const redis = new Redis({
  url: process.env.UPSTASH_RADIS_REST_URL,
  token: process.env.UPSTASH_RADIS_REST_TOKEN,
});
// create a ratelimiter that allows 100 requests per min
const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "20 s"),
});

export default rateLimit;

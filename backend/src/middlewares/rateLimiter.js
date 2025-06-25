import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  // per user
  try {
    const { success } = await rateLimit.limit("my-limit-key");
    if (!success) {
      return res.status(429).json({
        message: "Too Many Requests, Please try again later",
      });
    }
    next();
  } catch (error) {
    console.log("Rate limit Error", error);
    next(error);
  }
};

export default rateLimiter;

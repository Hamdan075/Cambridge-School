const rateLimit = require('express-rate-limit');

// General API rate limiter: max 100 requests per 15 minutes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again after 15 minutes' }
});

// Login attempts rate limiter: max 10 attempts per 15 minutes
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many login attempts, please try again after 15 minutes' }
});

// Form submission rate limiter: max 5 submissions per hour per IP
const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many form submissions, please try again after an hour' }
});

module.exports = {
  apiLimiter,
  loginLimiter,
  formLimiter
};

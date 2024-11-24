import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.{js,jsx,ts,tsx}",
    "!app/api/**/*",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
    "!instrumentation.ts",
    "!sentry.*.config.ts",
    "!next.config.ts",
    "!jest.config.ts",
    "!postcss.config.mjs",
    "!tailwind.config.ts",
  ],
  coverageDirectory: "coverage",
};

export default createJestConfig(config);

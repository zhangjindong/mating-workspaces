import { Config, createConfig } from '@umijs/test';

export default {
  ...createConfig(),
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  collectCoverageFrom: ['src/**/*.{ts,js,tsx,jsx}'],
} as Config.InitialOptions;

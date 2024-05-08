export default {
  preset: 'ts-jest',
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
};

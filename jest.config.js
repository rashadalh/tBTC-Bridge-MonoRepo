/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // If you are using ES modules, you might need to add the following configuration
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  setupFiles: [
    'jest-fetch-mock/setupJest'
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Or specify the path to your tsconfig file
    },
  },
};

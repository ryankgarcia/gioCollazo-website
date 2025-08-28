import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  resolver: 'ts-jest-resolver',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },

  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],

  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',

    '^@/(.*)$': '<rootDir>/src/$1',

    '\\.(gif|ttf|eot|svg|png|jpe?g|webp)$': '<rootDir>/src/test/__mocks__/fileMock.cjs',
  },

  transformIgnorePatterns: [
    '/node_modules/(?!(lucide-react|class-variance-authority|@radix-ui|nanoid)/)',
  ],

  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  moduleFileExtensions: ['ts','tsx','js','jsx','json']
};

export default config;

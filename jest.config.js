module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  // setupFiles: ['<rootDir>/jest/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setupAfterEnv.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {},
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx,js,jsx}',
    'src/contexts/**/*.{ts,tsx,js,jsx}',
    'src/database/**/*.{ts,tsx,js,jsx}',
    'src/environment/**/*.{ts,tsx,js,jsx}',
    'src/hocs/**/*.{ts,tsx,js,jsx}',
    'src/providers/**/*.{ts,tsx,js,jsx}',
    'src/routes/**/*.{ts,tsx,js,jsx}',
    'src/tools/**/*.{ts,tsx,js,jsx}',
    'src/styles/**/*.{ts,tsx,js,jsx}',
    //   '!pages/_app.tsx',
    //   '!pages/_document.tsx',
    //   '!pages/**/*.{ts,tsx}',
    '!/node_modules/',
    '!./**/index.{ts,tsx}',
    '!./**/*.stories.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
}

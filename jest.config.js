module.exports = {
  roots: ['server'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: 'server/coverage',
  globals: {
    'ts-jest': {
      tsconfig: 'server/tsconfig.json',
    },
  },
};
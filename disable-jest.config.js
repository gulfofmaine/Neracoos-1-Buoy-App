module.exports = {
  roots: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  moduleNameMapper: {
    "(.*)": "<rootDir>/src/$1",
  },
  setupFiles: ["<rootDir>/src/setupTests.ts"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  testRegex: "/__tests__/.*\\.(test|spec)\\.tsx?$",
}

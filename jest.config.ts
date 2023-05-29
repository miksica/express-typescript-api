module.exports = {
    preset: "ts-jest",
    testEnvironment: "nodemon",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    modulePaths: ["<rootDir>/src"],
    moduleDirectories: ["node_modules", "src"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

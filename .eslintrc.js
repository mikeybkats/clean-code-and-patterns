module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["plugin:@typescript-eslint/recommended"],
    parserOptions: {
        project: "./tsconfig.base.json",
    },
    rules: {
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/no-unused-vars": 1,
        "@typescript-eslint/no-empty-function": 1,
        "@typescript-eslint/interface-name-prefix": 0,
    },
};

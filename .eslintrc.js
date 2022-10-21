module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["next/core-web-vitals", "plugin:react/recommended", "standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/prop-types": "OFF",
    "react-hooks/exhaustive-deps": "OFF",
    "import/no-duplicates": ["OFF"],
    "react/no-unescaped-entities": ["OFF"],
    "no-unused-vars": "off",
  },
};

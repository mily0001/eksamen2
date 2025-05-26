module.exports = {
  plugins: ["prettier-plugin-astro"],
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  printWidth: 100,
  tabWidth: 2,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

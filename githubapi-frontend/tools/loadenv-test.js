const fs = require("fs/promises");
const dotenv = require("dotenv");
const path = require("path");

const targetFile = "environment.test.ts";
const pathTargetFile = path.resolve(
  __dirname,
  "..",
  "src",
  "environments",
  targetFile
);

const environmentConent = `// Arquivo gerado automaticamente pelo script /tools/loadenv.js
export const environment = {
    production: false,
    API: "https://api.github.com",
    token: "ghp_BkLHnngpbKgnXx8ootTxOZcjlTE5F4OcTj9",
};`;

fs.writeFile(pathTargetFile, environmentConent).catch(console.error);

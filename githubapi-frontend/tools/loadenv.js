const fs = require("fs/promises");
const dotenv = require("dotenv");
const path = require("path");

const isProduction = process.env["NODE_ENV"] === "production";
const targetFile = isProduction ? "environment.prod.ts" : "environment.dev.ts";
const pathTargetFile = path.resolve(
  __dirname,
  "..",
  "src",
  "environments",
  targetFile
);

const envFile = path.resolve(__dirname, "..", ".env");

dotenv.config({
  path: envFile,
});
const environmentConent = `// Arquivo gerado automaticamente pelo script /tools/loadenv.js
export const environment = {
    production: ${isProduction},
    API: "${process.env["API"]}",
    token: "${process.env["TOKEN"]}",
};`;
fs.writeFile(pathTargetFile, environmentConent).catch(console.error);

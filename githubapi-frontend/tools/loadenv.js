const fs = require("fs/promises");
const dotenv = require("dotenv");
const path = require("path");

const isProduction = process.env["NODE_ENV"] === "production";
const targetFile = isProduction ? "environment.prod.ts" : "environment.ts";
const pathTargetFile = path.resolve(
  __dirname,
  "..",
  "src",
  "environments",
  targetFile
);

const envFile = path.resolve(__dirname, "..", ".env");

fs.readFile(envFile)
  .then((_) => {
    dotenv.config({
      path: path.resolve(__dirname, "..", ".env"),
    });
    const environmentConent = `// Arquivo gerado automaticamente pelo script /tools/loadenv.js
    export const environment = {
        production: ${isProduction},
        API: "${process.env["API"]}",
        token: "${process.env["TOKEN"]}",
    };`;
    fs.writeFile(pathTargetFile, environmentConent).catch(error);
  })
  .catch((err) => {
    throw new Error(
      ".env not defined. Rename the file '.env.exemplo' to '.env' and replace the variables"
    );
  });

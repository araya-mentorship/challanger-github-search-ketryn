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
    API: "https://api.test.com/",
    token: "ZZDSA#@!DSADSADSADASDAS$!#@!#!@%$^%$HD",
};`;

fs.writeFile(pathTargetFile, environmentConent).catch(console.error);

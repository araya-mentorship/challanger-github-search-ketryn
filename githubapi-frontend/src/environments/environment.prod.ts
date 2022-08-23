import * as dotenv from 'dotenv' 

dotenv.config()
export const environment = {
  production: true,
  API: process.env['API'],
  token: process.env['TOKEN']
};

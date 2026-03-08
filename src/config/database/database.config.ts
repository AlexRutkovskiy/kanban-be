import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  const host = process.env.DB_HOST;
  const port = parseInt(process.env.DB_PORT as string, 10);
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_DATABASE;

  return {
    host,
    port,
    username,
    password,
    database,
    url: `postgresql://${username}:${password}@${host}:${port}/${database}`,
  };
});

import * as Joi from 'joi';

export const validationSchema = Joi.object({
  // DB
  DB_HOST: Joi.string().required().description('Database host'),
  DB_PORT: Joi.number().default(5432).description('Database port'),
  DB_USERNAME: Joi.string().required().description('Database username'),
  DB_PASSWORD: Joi.string().required().description('Database password'),
  // PGAdmin
  PGADMIN_DEFAULT_EMAIL: Joi.string()
    .required()
    .description('PGAdmin default email'),
  PGADMIN_DEFAULT_PASSWORD: Joi.string()
    .required()
    .description('PGAdmin default password'),
  PGADMIN_PORT: Joi.number().default(5050).description('PGAdmin port'),
  // App
  APP_PORT: Joi.number().default(3000).description('App port'),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development')
    .description('Node environment'),
  // JWT
  JWT_SECRET: Joi.string().min(32).required().description('JWT secret'),
  JWT_EXPIRES_IN: Joi.string().default('7d').description('JWT expires in'),
});

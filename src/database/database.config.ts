import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const db = configService.database;
  return {
    type: 'postgres',
    host: db.host,
    port: db.port,
    username: db.username,
    password: db.password,
    database: db.database,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: configService.isDevelopment(),
    logging: configService.isDevelopment(),

    ...(configService.isProduction() && {
      ssl: { rejectUnauthorized: false },
      extra: {
        max: 20,
      },
    }),
  };
};

import { Injectable, Logger } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  private readonly logger = new Logger(ConfigService.name);

  constructor(private configService: NestConfigService) {
    this.logger.log('ConfigService initialized');
  }

  get database() {
    return {
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.database'),
      url: this.configService.get<string>('database.url'),
    };
  }

  get app() {
    return {
      port: this.configService.get<number>('app.port'),
      environment: this.configService.get<string>('app.environment'),
      isDevelopment: this.configService.get<boolean>('app.isDevelopment'),
      isProduction: this.configService.get<boolean>('app.isProduction'),
      isTest: this.configService.get<boolean>('app.isTest'),
    };
  }

  get jwt() {
    return {
      secret: this.configService.getOrThrow<string>('jwt.secret'),
      expiresIn: this.configService.get<string>('jwt.expiresIn', '7d'),
      refreshSecret: this.configService.get<string>('jwt.refreshSecret'),
      refreshExpiresIn: this.configService.get<string>('jwt.refreshExpiresIn'),
    };
  }

  isDevelopment(): boolean {
    return this.configService.get('NODE_ENV') === 'development';
  }

  isProduction(): boolean {
    return this.configService.get('NODE_ENV') === 'production';
  }
}

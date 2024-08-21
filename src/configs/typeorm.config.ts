import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

export const typeOrmConfig = (
  configService?: ConfigService,
): DataSourceOptions => ({
  type: 'postgres',
  host: configService
    ? configService.get<string>('POSTGRES_HOST', 'localhost')
    : process.env.POSTGRES_HOST || 'localhost',
  port: configService
    ? configService.get<number>('POSTGRES_PORT', 5432)
    : parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: configService
    ? configService.get<string>('POSTGRES_USER')
    : process.env.POSTGRES_USER,
  password: configService
    ? configService.get<string>('POSTGRES_PASSWORD')
    : process.env.POSTGRES_PASSWORD,
  database: configService
    ? configService.get<string>('POSTGRES_DB')
    : process.env.POSTGRES_DB,
  entities: [__dirname + '/../database/entities/*.entity{.ts,.js}'],
  synchronize: false,
});

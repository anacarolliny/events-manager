import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { CouponsModule } from './coupons/coupons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
    DatabaseModule,
    EventsModule,
    CouponsModule,
    AddressModule,
  ],
})
export class AppModule {}

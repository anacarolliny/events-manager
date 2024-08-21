import { Module } from '@nestjs/common';
import { EventRepository } from './repositories/events.repository';
import { CouponRepository } from './repositories/coupons.repository';
import { AddressRepository } from './repositories/address.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Coupon } from './entities/coupon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, Coupon, Address])],
  providers: [
    {
      provide: 'IEventRepository',
      useClass: EventRepository,
    },
    {
      provide: 'ICouponRepository',
      useClass: CouponRepository,
    },
    {
      provide: 'IAddressRepository',
      useClass: AddressRepository,
    },
  ],
  exports: [
    TypeOrmModule,
    'IEventRepository',
    'ICouponRepository',
    'IAddressRepository',
  ],
})
export class DatabaseModule {}

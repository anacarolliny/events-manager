import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { Coupon } from 'src/database/entities/coupon.entity';

@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Post()
  createCoupon(@Body() couponData: Partial<Coupon>) {
    return this.couponsService.createCoupon(couponData);
  }

  @Get()
  getAllCoupons() {
    return this.couponsService.getAllCoupons();
  }

  @Get(':id')
  getCouponById(@Param('id') id: number) {
    return this.couponsService.getCouponById(id);
  }

  @Put(':id')
  updateCoupon(@Param('id') id: number, @Body() updatedData: Partial<Coupon>) {
    return this.couponsService.updateCoupon(id, updatedData);
  }

  @Delete(':id')
  deleteCoupon(@Param('id') id: number) {
    return this.couponsService.deleteCoupon(id);
  }
}

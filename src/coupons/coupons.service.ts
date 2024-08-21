import { Inject, Injectable } from '@nestjs/common';
import { Coupon } from 'src/database/entities/coupon.entity';
import { ICouponRepository } from 'src/database/interfaces/coupons.interface';

@Injectable()
export class CouponsService {
  constructor(
    @Inject('ICouponRepository')
    private readonly couponsRepository: ICouponRepository,
  ) {}

  createCoupon(couponData: Partial<Coupon>) {
    return this.couponsRepository.create(couponData);
  }

  getAllCoupons() {
    return this.couponsRepository.findAll();
  }

  getCouponById(id: number) {
    return this.couponsRepository.findById(id);
  }

  updateCoupon(id: number, updatedData: Partial<Coupon>) {
    return this.couponsRepository.update(id, updatedData);
  }

  deleteCoupon(id: number) {
    return this.couponsRepository.delete(id);
  }
}

import { Coupon } from '../entities/coupon.entity';

export interface ICouponRepository {
  create(couponData: Partial<Coupon>): Promise<Coupon>;
  findAll(): Promise<Coupon[]>;
  findById(id: number): Promise<Coupon>;
  update(id: number, updatedData: Partial<Coupon>): Promise<Coupon>;
  delete(id: number): Promise<void>;
}

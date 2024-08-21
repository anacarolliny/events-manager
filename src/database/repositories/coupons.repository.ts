import { Repository } from 'typeorm';
import { Coupon } from '../entities/coupon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ICouponRepository } from '../interfaces/coupons.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CouponRepository implements ICouponRepository {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepo: Repository<Coupon>,
  ) {}

  async create(couponData: Partial<Coupon>): Promise<Coupon> {
    const coupon = this.couponRepo.create(couponData);
    return this.couponRepo.save(coupon);
  }

  async findAll(): Promise<Coupon[]> {
    return this.couponRepo.find();
  }

  async findById(id: number): Promise<Coupon> {
    return this.couponRepo.findOne({ where: { id } });
  }

  async update(id: number, updatedData: Partial<Coupon>): Promise<Coupon> {
    await this.couponRepo.update(id, updatedData);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.couponRepo.delete(id);
  }
}

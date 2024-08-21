import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  discountType: 'percentage' | 'fixed';

  @Column('decimal')
  discountValue: number;

  @Column({ nullable: true })
  expirationDate: Date;

  @ManyToOne(() => Event, event => event.coupons)
  event: Event;
}

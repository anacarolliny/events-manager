import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Coupon } from './coupon.entity';
import { Address } from './address.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  date: Date;

  @Column()
  type: 'remote' | 'in-person';

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  eventUrl: string;

  @OneToMany(() => Coupon, coupon => coupon.event, {
    cascade: ['insert', 'update', 'remove'],
    eager: true,
  })
  coupons: Coupon[];

  @OneToOne(() => Address, address => address.event, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  address: Address;
}

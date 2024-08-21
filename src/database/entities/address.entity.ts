import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uf: string;

  @Column()
  city: string;

  @OneToOne(() => Event, event => event.address)
  event: Event;
}

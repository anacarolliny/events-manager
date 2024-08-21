import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IEventRepository } from '../interfaces/events.interface';
import { Event } from '../entities/event.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventRepository implements IEventRepository {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepo: Repository<Event>,
  ) {}

  async create(eventData: Partial<Event>): Promise<Event> {
    const event = this.eventRepo.create(eventData);
    return this.eventRepo.save(event);
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepo.find();
  }

  async findById(id: number): Promise<Event> {
    return this.eventRepo.findOne({ where: { id } });
  }

  async update(id: number, updatedData: Partial<Event>): Promise<Event> {
    await this.eventRepo.update(id, updatedData);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.eventRepo.delete(id);
  }
}

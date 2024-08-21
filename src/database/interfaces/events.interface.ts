import { Event } from '../entities/event.entity';

export interface IEventRepository {
  create(eventData: Partial<Event>): Promise<Event>;
  findAll(): Promise<Event[]>;
  findById(id: number): Promise<Event>;
  update(id: number, updatedData: Partial<Event>): Promise<Event>;
  delete(id: number): Promise<void>;
}

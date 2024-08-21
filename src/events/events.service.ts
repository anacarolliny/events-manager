import { Injectable, Inject } from '@nestjs/common';
import { Event } from 'src/database/entities/event.entity';
import { IEventRepository } from 'src/database/interfaces/events.interface';

@Injectable()
export class EventsService {
  constructor(
    @Inject('IEventRepository')
    private readonly eventRepository: IEventRepository,
  ) {}

  createEvent(eventData: Partial<Event>) {
    return this.eventRepository.create(eventData);
  }

  getAllEvents() {
    return this.eventRepository.findAll();
  }

  getEventById(id: number) {
    return this.eventRepository.findById(id);
  }

  updateEvent(id: number, updatedData: Partial<Event>) {
    return this.eventRepository.update(id, updatedData);
  }

  deleteEvent(id: number) {
    return this.eventRepository.delete(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from 'src/database/entities/event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getAllEvents() {
    return this.eventsService.getAllEvents();
  }

  @Get(':id')
  getEventById(@Param('id') id: number) {
    return this.eventsService.getEventById(id);
  }

  @Post()
  createEvent(@Body() eventData: Partial<Event>) {
    return this.eventsService.createEvent(eventData);
  }

  @Put(':id')
  updateEvent(@Param('id') id: number, @Body() updatedData: Partial<Event>) {
    return this.eventsService.updateEvent(id, updatedData);
  }

  @Delete(':id')
  deleteEvent(@Param('id') id: number) {
    return this.eventsService.deleteEvent(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Address } from 'src/database/entities/address.entity';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  createAddress(@Body() addressData: Partial<Address>) {
    return this.addressService.createAddress(addressData);
  }

  @Get()
  getAllAddresses() {
    return this.addressService.getAllAddresses();
  }

  @Get(':id')
  getAddressById(@Param('id') id: number) {
    return this.addressService.getAddressById(id);
  }

  @Put(':id')
  updateAddress(
    @Param('id') id: number,
    @Body() updatedData: Partial<Address>,
  ) {
    return this.addressService.updateAddress(id, updatedData);
  }

  @Delete(':id')
  deleteAddress(@Param('id') id: number) {
    return this.addressService.deleteAddress(id);
  }
}

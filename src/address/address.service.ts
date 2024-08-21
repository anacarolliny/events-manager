import { Injectable, Inject } from '@nestjs/common';
import { Address } from 'src/database/entities/address.entity';
import { IAddressRepository } from 'src/database/interfaces/address.interface';

@Injectable()
export class AddressService {
  constructor(
    @Inject('IAddressRepository')
    private readonly addressRepository: IAddressRepository,
  ) {}

  createAddress(addressData: Partial<Address>) {
    return this.addressRepository.create(addressData);
  }

  getAllAddresses() {
    return this.addressRepository.findAll();
  }

  getAddressById(id: number) {
    return this.addressRepository.findById(id);
  }

  updateAddress(id: number, updatedData: Partial<Address>) {
    return this.addressRepository.update(id, updatedData);
  }

  deleteAddress(id: number) {
    return this.addressRepository.delete(id);
  }
}

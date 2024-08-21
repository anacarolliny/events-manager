import { Repository } from 'typeorm';
import { Address } from '../entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IAddressRepository } from '../interfaces/address.interface';

export class AddressRepository implements IAddressRepository {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepo: Repository<Address>,
  ) {}

  async create(addressData: Partial<Address>): Promise<Address> {
    const address = this.addressRepo.create(addressData);
    return this.addressRepo.save(address);
  }

  async findAll(): Promise<Address[]> {
    return this.addressRepo.find();
  }

  async findById(id: number): Promise<Address> {
    return this.addressRepo.findOne({ where: { id } });
  }

  async update(id: number, updatedData: Partial<Address>): Promise<Address> {
    await this.addressRepo.update(id, updatedData);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.addressRepo.delete(id);
  }
}

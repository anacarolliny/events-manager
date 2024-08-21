import { Address } from '../entities/address.entity';

export interface IAddressRepository {
  create(addressData: Partial<Address>): Promise<Address>;
  findAll(): Promise<Address[]>;
  findById(id: number): Promise<Address>;
  update(id: number, updatedData: Partial<Address>): Promise<Address>;
  delete(id: number): Promise<void>;
}

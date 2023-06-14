import { Column } from 'typeorm';

export class EmailAddress {
  @column({ name: 'address' })
  address: string;
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  fname: string;

  @Column()
  lname: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column({ default: true })
  isActive: boolean;
}

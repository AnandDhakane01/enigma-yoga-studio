import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Batches } from "./batch.entity";
import { Users } from "./user.entity";

@Entity()
export class Registration_info {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.registration_info)
  user: Users;

  @ManyToOne(() => Batches, (batch) => batch.registration_info)
  batch: Batches;

  @Column()
  month: number;

  @Column()
  year: number;
}

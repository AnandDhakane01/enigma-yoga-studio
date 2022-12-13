import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Registration_info } from "./registration_info.entity";

@Entity()
export class Batches {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batch: string;

  @OneToMany(
    () => Registration_info,
    (registration_info) => registration_info.batch
  )
  registration_info: Registration_info[];
}

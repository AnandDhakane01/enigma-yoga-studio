import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Registration_info } from "./registration_info.entity";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @OneToMany(
    () => Registration_info,
    (registration_info) => registration_info.user
  )
  registration_info: Registration_info[];
}

import { DataSourceOptions } from "typeorm";
import { Users } from "./entities/user.entity";
import { Batches } from "./entities/batch.entity";
import { Registration_info } from "./entities/registration_info.entity";

export default {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "anand",
  database: "enigma",
  synchronize: true,
  dropSchema: false,
  logging: true,
  entities: [Users, Batches, Registration_info],
} as DataSourceOptions;

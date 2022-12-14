import { Request, Response } from "express";
import AppDataSource from "../index";
import { Users } from "../entities/user.entity";
import { Registration_info } from "../entities/registration_info.entity";
import { Batches } from "../entities/batch.entity";

const register = async (req: Request, res: Response) => {
  const { firstName, lastName, age, email, batch, month, amount, year } =
    req.body;

  const dataSource = AppDataSource.manager;

  try {
    const saved_item = await dataSource
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values({
        firstName,
        lastName,
        age,
        email,
      })
      .execute();

    const user_id = saved_item.raw[0].id;

    const batch_id: any = await AppDataSource.getRepository(Batches)
      .createQueryBuilder("batch")
      .where("batch.batch = :batch", { batch: batch })
      .select("batch.id")
      .getOne();

    await dataSource
      .createQueryBuilder()
      .insert()
      .into(Registration_info)
      .values({ user: user_id, month, year, batch: batch_id.id })
      .execute();

    res
      .status(200)
      .json({ message: "Congratulations! enrollment successful!" });
  } catch (e) {
    res.status(400).json({ error: true, message: e.message });
  }
};

export = register;

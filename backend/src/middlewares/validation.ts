import { Request, Response, NextFunction } from "express";
import AppDataSource from "../index";
import { Batches } from "../entities/batch.entity";
import { debug } from "winston";

const registerInitialChecks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, age, email, batch, month, amount, year } =
    req.body;

  // check types
  if (
    typeof firstName != "string" ||
    typeof lastName != "string" ||
    typeof age != "number" ||
    typeof email != "string" ||
    typeof batch != "string" ||
    typeof month != "number" ||
    typeof year != "number" ||
    typeof amount != "number"
  ) {
    return res
      .status(406)
      .json({ error: true, message: "Incomplete Form Data" });
  }

  // check if user fits in the required age bracket
  if (age < 18 || age > 65) {
    return res.status(406).json({
      error: true,
      message:
        "Oops!! you don't belong in the age bracket allowed for the yoga classes!",
    });
  }
  // check if amount is 500
  if (amount != 500) {
    return res.status(406).json({
      error: true,
      message: "Invalid Amount",
    });
  }

  // check if year and month are current or in the future
  let currentTime = new Date();
  if (
    year < currentTime.getFullYear() ||
    (month < currentTime.getMonth() && year <= currentTime.getFullYear())
  ) {
    return res.status(406).json({
      error: true,
      message: "Heyy!, you can't register for a month in the past!",
    });
  }

  // check if batch is a valid batch
  try {
    const batches = (
      await AppDataSource.getRepository(Batches)
        .createQueryBuilder()
        .select("Batches.batch")
        .getMany()
    ).map((i) => i.batch);

    if (!batches.includes(batch)) {
      return res.status(406).json({ message: "Incorrect Batch Selected!" });
    }
  } catch (e) {
    return res.status(406).json({ error: true, message: e.message });
  }
  next();
};

export = registerInitialChecks;

import { Request, Response, NextFunction } from "express";

const completePayment = (req: Request, res: Response, next: NextFunction) => {
  const payment_completed = true;
  if (payment_completed) {
    next();
  }
  res
    .status(400)
    .json({ error: true, message: "Payment Failed, please retry" });
};

export default completePayment;

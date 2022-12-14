"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const index_1 = __importDefault(require("../index"));
const batch_entity_1 = require("../entities/batch.entity");
const registerInitialChecks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, age, email, batch, month, amount, year } = req.body;
    // check types
    if (typeof firstName != "string" ||
        typeof lastName != "string" ||
        typeof age != "number" ||
        typeof email != "string" ||
        typeof batch != "string" ||
        typeof month != "number" ||
        typeof year != "number" ||
        typeof amount != "number") {
        return res
            .status(406)
            .json({ error: true, message: "Incomplete Form Data" });
    }
    // check if user fits in the required age bracket
    if (age < 18 || age > 65) {
        return res.status(406).json({
            error: true,
            message: "Oops!! you don't belong in the age bracket allowed for the yoga classes!",
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
    if (year < currentTime.getFullYear() ||
        (month < currentTime.getMonth() && year <= currentTime.getFullYear())) {
        return res.status(406).json({
            error: true,
            message: "Heyy!, you can't register for a month in the past!",
        });
    }
    // check if batch is a valid batch
    try {
        const batches = (yield index_1.default.getRepository(batch_entity_1.Batches)
            .createQueryBuilder()
            .select("Batches.batch")
            .getMany()).map((i) => i.batch);
        if (!batches.includes(batch)) {
            return res.status(406).json({ message: "Incorrect Batch Selected!" });
        }
    }
    catch (e) {
        return res.status(406).json({ error: true, message: e.message });
    }
    next();
});
module.exports = registerInitialChecks;
//# sourceMappingURL=validation.js.map
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
const user_entity_1 = require("../entities/user.entity");
const registration_info_entity_1 = require("../entities/registration_info.entity");
const batch_entity_1 = require("../entities/batch.entity");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, age, email, batch, month, amount, year } = req.body;
    const dataSource = index_1.default.manager;
    try {
        const saved_item = yield dataSource
            .createQueryBuilder()
            .insert()
            .into(user_entity_1.Users)
            .values({
            firstName,
            lastName,
            age,
            email,
        })
            .execute();
        const user_id = saved_item.raw[0].id;
        const batch_id = yield index_1.default.getRepository(batch_entity_1.Batches)
            .createQueryBuilder("batch")
            .where("batch.batch = :batch", { batch: batch })
            .select("batch.id")
            .getOne();
        yield dataSource
            .createQueryBuilder()
            .insert()
            .into(registration_info_entity_1.Registration_info)
            .values({ user: user_id, month, year, batch: batch_id.id })
            .execute();
        res
            .status(200)
            .json({ message: "Congratulations! enrollment successful!" });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e.message });
    }
});
module.exports = register;
//# sourceMappingURL=register.js.map
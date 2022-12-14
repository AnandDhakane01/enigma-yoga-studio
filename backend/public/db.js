"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("./entities/user.entity");
const batch_entity_1 = require("./entities/batch.entity");
const registration_info_entity_1 = require("./entities/registration_info.entity");
exports.default = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "anand",
    database: "enigma",
    synchronize: true,
    dropSchema: false,
    logging: true,
    entities: [user_entity_1.Users, batch_entity_1.Batches, registration_info_entity_1.Registration_info],
};
//# sourceMappingURL=db.js.map
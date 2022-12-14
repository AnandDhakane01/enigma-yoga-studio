"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const validation_1 = __importDefault(require("./middlewares/validation"));
const register_1 = __importDefault(require("./controllers/register"));
const typeorm_1 = require("typeorm");
// app
const app = (0, express_1.default)();
dotenv.config();
const port = 5000;
// middlewares
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const options = {
    origin: "*",
};
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
// register route
app.get("/", (req, res) => {
    return res.status(200).send("Enigma Yoga Studio");
});
app.post("/register", validation_1.default, register_1.default);
// initializing DB
const AppDataSource = new typeorm_1.DataSource(db_1.default);
AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => console.error("Error during Data Source initialization", err));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
exports.default = AppDataSource;
//# sourceMappingURL=index.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Batches = void 0;
const typeorm_1 = require("typeorm");
const registration_info_entity_1 = require("./registration_info.entity");
let Batches = class Batches {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Batches.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Batches.prototype, "batch", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => registration_info_entity_1.Registration_info, (registration_info) => registration_info.batch),
    __metadata("design:type", Array)
], Batches.prototype, "registration_info", void 0);
Batches = __decorate([
    (0, typeorm_1.Entity)()
], Batches);
exports.Batches = Batches;
//# sourceMappingURL=batch.entity.js.map
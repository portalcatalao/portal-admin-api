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
exports.VersionModel = void 0;
const model_entity_1 = require("../../models/entities/model.entity");
const year_version_model_entity_1 = require("../../year_version_models/entities/year_version_model.entity");
const typeorm_1 = require("typeorm");
let VersionModel = exports.VersionModel = class VersionModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VersionModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => model_entity_1.Model, model => model.versions, { onDelete: 'CASCADE', nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'model_id' }),
    __metadata("design:type", model_entity_1.Model)
], VersionModel.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], VersionModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], VersionModel.prototype, "id_string", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], VersionModel.prototype, "fipe_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], VersionModel.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => year_version_model_entity_1.YearVersionModel, yearVersionModel => yearVersionModel.versionModel),
    __metadata("design:type", Array)
], VersionModel.prototype, "years", void 0);
exports.VersionModel = VersionModel = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(['fipe_code'])
], VersionModel);
//# sourceMappingURL=version_model.entity.js.map
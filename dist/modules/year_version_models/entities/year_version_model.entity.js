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
exports.YearVersionModel = void 0;
const version_model_entity_1 = require("../../version_models/entities/version_model.entity");
const typeorm_1 = require("typeorm");
let YearVersionModel = exports.YearVersionModel = class YearVersionModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], YearVersionModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => version_model_entity_1.VersionModel, versionModel => versionModel.years, { onDelete: 'CASCADE', nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'version_model_id' }),
    __metadata("design:type", version_model_entity_1.VersionModel)
], YearVersionModel.prototype, "versionModel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], YearVersionModel.prototype, "year_model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 0, nullable: true }),
    __metadata("design:type", Number)
], YearVersionModel.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], YearVersionModel.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], YearVersionModel.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'longtext', nullable: true }),
    __metadata("design:type", String)
], YearVersionModel.prototype, "history", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], YearVersionModel.prototype, "last_update_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], YearVersionModel.prototype, "reference_month", void 0);
exports.YearVersionModel = YearVersionModel = __decorate([
    (0, typeorm_1.Entity)()
], YearVersionModel);
//# sourceMappingURL=year_version_model.entity.js.map
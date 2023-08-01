"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionModelsModule = void 0;
const common_1 = require("@nestjs/common");
const version_models_service_1 = require("./version_models.service");
const version_models_controller_1 = require("./version_models.controller");
const typeorm_1 = require("@nestjs/typeorm");
const version_model_entity_1 = require("./entities/version_model.entity");
let VersionModelsModule = exports.VersionModelsModule = class VersionModelsModule {
};
exports.VersionModelsModule = VersionModelsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([version_model_entity_1.VersionModel])],
        controllers: [version_models_controller_1.VersionModelsController],
        providers: [version_models_service_1.VersionModelsService]
    })
], VersionModelsModule);
//# sourceMappingURL=version_models.module.js.map
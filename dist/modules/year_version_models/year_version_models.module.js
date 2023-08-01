"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearVersionModelsModule = void 0;
const common_1 = require("@nestjs/common");
const year_version_models_service_1 = require("./year_version_models.service");
const year_version_models_controller_1 = require("./year_version_models.controller");
const typeorm_1 = require("@nestjs/typeorm");
const year_version_model_entity_1 = require("./entities/year_version_model.entity");
let YearVersionModelsModule = exports.YearVersionModelsModule = class YearVersionModelsModule {
};
exports.YearVersionModelsModule = YearVersionModelsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([year_version_model_entity_1.YearVersionModel])],
        controllers: [year_version_models_controller_1.YearVersionModelsController],
        providers: [year_version_models_service_1.YearVersionModelsService]
    })
], YearVersionModelsModule);
//# sourceMappingURL=year_version_models.module.js.map
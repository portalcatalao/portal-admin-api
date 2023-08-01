"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const brands_module_1 = require("./modules/brands/brands.module");
const models_module_1 = require("./modules/models/models.module");
const version_models_module_1 = require("./modules/version_models/version_models.module");
const year_version_models_module_1 = require("./modules/year_version_models/year_version_models.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const fipe_module_1 = require("./modules/fipe/fipe.module");
const auth_module_1 = require("./modules/auth/auth.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'classified-vehicle.cdlok5zmpop7.sa-east-1.rds.amazonaws.com',
                port: 3306,
                username: 'portal',
                password: 'Term228687535',
                database: 'vehicles_bd',
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize: true,
            }),
            brands_module_1.BrandsModule,
            models_module_1.ModelsModule,
            version_models_module_1.VersionModelsModule,
            year_version_models_module_1.YearVersionModelsModule, fipe_module_1.FipeModule, auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
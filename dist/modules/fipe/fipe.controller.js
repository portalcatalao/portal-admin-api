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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FipeController = void 0;
const common_1 = require("@nestjs/common");
const fipe_service_1 = require("./fipe.service");
const find_fipe_dto_1 = require("./dto/find-fipe.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
let FipeController = exports.FipeController = class FipeController {
    constructor(fipeService) {
        this.fipeService = fipeService;
    }
    findReference() {
        return this.fipeService.findReference();
    }
    findBrands(query) {
        return this.fipeService.findBrands(query);
    }
    findModels(query) {
        return this.fipeService.findModels(query);
    }
    findYears(query) {
        return this.fipeService.findYears(query);
    }
    findDetails(query) {
        return this.fipeService.findDetails(query);
    }
    findDetailsByCode(query) {
        return this.fipeService.findDetailsByCode(query);
    }
    findByFipe(query) {
        return this.fipeService.findByFipe(query);
    }
};
__decorate([
    (0, common_1.Get)('references'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "findReference", null);
__decorate([
    (0, common_1.Get)('brands'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_fipe_dto_1.FindFipeBrandDto]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "findBrands", null);
__decorate([
    (0, common_1.Get)('models'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_fipe_dto_1.FindFipeModelsDto]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "findModels", null);
__decorate([
    (0, common_1.Get)('years'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_fipe_dto_1.FindFipeYearsDto]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "findYears", null);
__decorate([
    (0, common_1.Get)('details'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_fipe_dto_1.FindFipeDetailsDto]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "findDetails", null);
__decorate([
    (0, common_1.Get)('details/code'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_fipe_dto_1.FindFipeDetailsCodeDto]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "findDetailsByCode", null);
__decorate([
    (0, common_1.Get)('code'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_fipe_dto_1.FindFipeDto]),
    __metadata("design:returntype", void 0)
], FipeController.prototype, "findByFipe", null);
exports.FipeController = FipeController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('fipe'),
    __metadata("design:paramtypes", [fipe_service_1.FipeService])
], FipeController);
//# sourceMappingURL=fipe.controller.js.map
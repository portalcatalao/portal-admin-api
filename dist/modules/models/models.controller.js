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
exports.ModelsController = void 0;
const common_1 = require("@nestjs/common");
const models_service_1 = require("./models.service");
const create_model_dto_1 = require("./dto/create-model.dto");
const update_model_dto_1 = require("./dto/update-model.dto");
const find_model_dto_1 = require("./dto/find-model.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
let ModelsController = exports.ModelsController = class ModelsController {
    constructor(modelsService) {
        this.modelsService = modelsService;
    }
    create(createModelDto) {
        return this.modelsService.create(createModelDto);
    }
    findAll(query) {
        return this.modelsService.findAll(query);
    }
    findOne(id) {
        return this.modelsService.findOne(+id);
    }
    update(id, updateModelDto) {
        return this.modelsService.update(+id, updateModelDto);
    }
    remove(id) {
        return this.modelsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_model_dto_1.CreateModelDto]),
    __metadata("design:returntype", void 0)
], ModelsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_model_dto_1.FindModelDto]),
    __metadata("design:returntype", void 0)
], ModelsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModelsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_model_dto_1.UpdateModelDto]),
    __metadata("design:returntype", void 0)
], ModelsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModelsController.prototype, "remove", null);
exports.ModelsController = ModelsController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('models'),
    __metadata("design:paramtypes", [models_service_1.ModelsService])
], ModelsController);
//# sourceMappingURL=models.controller.js.map
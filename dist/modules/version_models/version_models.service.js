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
exports.VersionModelsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const version_model_entity_1 = require("./entities/version_model.entity");
const typeorm_2 = require("typeorm");
const slugify_1 = require("slugify");
let VersionModelsService = exports.VersionModelsService = class VersionModelsService {
    constructor(versionModelRepository) {
        this.versionModelRepository = versionModelRepository;
    }
    async create(createVersionModelDto) {
        try {
            const id_string = createVersionModelDto.name ? (0, slugify_1.default)(createVersionModelDto.name, { lower: true }) : null;
            const version = this.versionModelRepository.create({ ...createVersionModelDto, id_string });
            return {
                success: true,
                result: await this.versionModelRepository.save(version)
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findAll(queryDto) {
        try {
            const { "model-id": modelId, "brand-id-string": brandIdString, type } = queryDto;
            const query = this.versionModelRepository.createQueryBuilder('versionModel')
                .leftJoinAndSelect('versionModel.model', 'model')
                .leftJoinAndSelect('model.brand', 'brand')
                .leftJoinAndSelect('versionModel.years', 'year');
            {
                modelId ? query.andWhere('model.id = :modelId', { modelId }) : null;
            }
            {
                brandIdString ? query.andWhere('brand.id_string = :brandIdString', { brandIdString }) : null;
            }
            {
                type ? query.andWhere('versionModel.type = :type', { type }) : null;
            }
            const [results, total] = await query.getManyAndCount();
            return {
                success: true,
                results,
                total
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findOne(id) {
        try {
            return {
                success: true,
                result: await this.versionModelRepository.findOneBy({ id })
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findOneByFipe(fipe_code) {
        try {
            return {
                success: true,
                result: await this.versionModelRepository.findOneBy({ fipe_code })
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async update(id, updateVersionModelDto) {
        try {
            const version = await this.versionModelRepository.findOneBy({ id });
            if (!version)
                throw new Error('Versão não encontrada.');
            const id_string = updateVersionModelDto.name ? (0, slugify_1.default)(updateVersionModelDto.name, { lower: true }) : null;
            await this.versionModelRepository.update(id, { ...updateVersionModelDto, id_string: id_string ?? version.id_string });
            return {
                success: true,
                result: await this.versionModelRepository.findOneBy({ id }),
                message: 'Versão atualizada com sucesso'
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async remove(id) {
        try {
            const version = await this.versionModelRepository.findOneBy({ id });
            if (!version)
                throw new Error('Versão não encontrada.');
            await this.versionModelRepository.delete(id);
            return {
                success: true,
                message: 'Versão removida com sucesso'
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
};
exports.VersionModelsService = VersionModelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(version_model_entity_1.VersionModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VersionModelsService);
//# sourceMappingURL=version_models.service.js.map
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
exports.YearVersionModelsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const year_version_model_entity_1 = require("./entities/year_version_model.entity");
const typeorm_2 = require("typeorm");
let YearVersionModelsService = exports.YearVersionModelsService = class YearVersionModelsService {
    constructor(yearVersionModelRepository) {
        this.yearVersionModelRepository = yearVersionModelRepository;
    }
    async create(createYearVersionModelDto) {
        try {
            const yearExists = await this.yearVersionModelRepository.findOne({ where: {
                    versionModel: createYearVersionModelDto.versionModel,
                    year_model: createYearVersionModelDto.year_model
                } });
            if (yearExists)
                throw new Error('Esse ano já existe.');
            const year = this.yearVersionModelRepository.create(createYearVersionModelDto);
            return {
                success: true,
                result: await this.yearVersionModelRepository.save(year)
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
            const { "version-id": versionId } = queryDto;
            const query = this.yearVersionModelRepository.createQueryBuilder('yearVersionModel')
                .leftJoinAndSelect('yearVersionModel.versionModel', 'versionModel');
            {
                versionId ? query.andWhere('versionModel.id = :versionId', { versionId }) : null;
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
            const year = await this.yearVersionModelRepository.findOneBy({ id });
            if (!year)
                throw new Error('Ano não encontrado.');
            return {
                success: true,
                result: year,
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async update(id, updateYearVersionModelDto) {
        try {
            const year = await this.yearVersionModelRepository.findOneBy({ id });
            if (!year)
                throw new Error('Ano não encontrado.');
            await this.yearVersionModelRepository.update(id, updateYearVersionModelDto);
            return {
                success: true,
                result: await this.yearVersionModelRepository.findOneBy({ id }),
                message: 'Ano atualizado com sucesso'
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
            const year = await this.yearVersionModelRepository.findOneBy({ id });
            if (!year)
                throw new Error('Ano não encontrado.');
            await this.yearVersionModelRepository.delete(id);
            return {
                success: true,
                message: 'Ano removido com sucesso'
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
exports.YearVersionModelsService = YearVersionModelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(year_version_model_entity_1.YearVersionModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], YearVersionModelsService);
//# sourceMappingURL=year_version_models.service.js.map
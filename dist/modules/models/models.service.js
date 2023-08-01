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
exports.ModelsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const model_entity_1 = require("./entities/model.entity");
const typeorm_2 = require("typeorm");
const slugify_1 = require("slugify");
let ModelsService = exports.ModelsService = class ModelsService {
    constructor(modelRepository) {
        this.modelRepository = modelRepository;
    }
    async create(createModelDto) {
        try {
            const id_string = createModelDto.name ? (0, slugify_1.default)(createModelDto.name, { lower: true }) : null;
            const model = this.modelRepository.create({ ...createModelDto, id_string });
            return {
                success: true,
                result: await this.modelRepository.save(model)
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
            const { "brand-id": brandId, "brand-id-string": brandIdString, type } = queryDto;
            const query = this.modelRepository.createQueryBuilder('model')
                .leftJoinAndSelect('model.brand', 'brand');
            console.log(queryDto);
            {
                brandId ? query.andWhere('brand.id = :brandId', { brandId }) : null;
            }
            {
                brandIdString ? query.andWhere('brand.id_string = :brandIdString', { brandIdString }) : null;
            }
            {
                type ? query.andWhere('model.type = :type', { type }) : null;
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
                result: await this.modelRepository.findOneBy({ id })
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async update(id, updateModelDto) {
        try {
            const model = await this.modelRepository.findOneBy({ id });
            if (!model)
                throw new Error('Modelo não encontrado.');
            await this.modelRepository.update(id, updateModelDto);
            return {
                success: true,
                result: await this.modelRepository.findOneBy({ id }),
                message: 'Modelo atualizado com sucesso'
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
            const model = await this.modelRepository.findOneBy({ id });
            if (!model)
                throw new Error('Modelo não encontrado.');
            await this.modelRepository.delete(id);
            return {
                success: true,
                message: 'Modelo removido com sucesso'
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
exports.ModelsService = ModelsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(model_entity_1.Model)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModelsService);
//# sourceMappingURL=models.service.js.map
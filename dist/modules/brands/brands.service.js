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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const brand_entity_1 = require("./entities/brand.entity");
const typeorm_2 = require("typeorm");
const slugify_1 = require("slugify");
let BrandsService = exports.BrandsService = class BrandsService {
    constructor(brandRepository) {
        this.brandRepository = brandRepository;
    }
    async create(createBrandDto) {
        try {
            const id_string = createBrandDto.name ? (0, slugify_1.default)(createBrandDto.name, { lower: true }) : null;
            const brand = this.brandRepository.create({ ...createBrandDto, id_string });
            return {
                success: true,
                result: await this.brandRepository.save(brand)
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
            const { type } = queryDto;
            const query = this.brandRepository.createQueryBuilder('brand');
            {
                type ? query.andWhere('brand.type = :type', { type }) : null;
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
                result: await this.brandRepository.findOneBy({ id }),
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async update(id, updateBrandDto) {
        try {
            const brand = await this.brandRepository.findOneBy({ id });
            if (!brand)
                throw new Error('Marca não encontrada.');
            await this.brandRepository.update(id, updateBrandDto);
            return {
                success: true,
                result: await this.brandRepository.findOneBy({ id }),
                message: 'Marca atualizada com sucesso'
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
            const brand = await this.brandRepository.findOneBy({ id });
            if (!brand)
                throw new Error('Marca não encontrado.');
            await this.brandRepository.delete(id);
            return {
                success: true,
                message: 'Marca removido com sucesso'
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
exports.BrandsService = BrandsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brand_entity_1.Brand)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BrandsService);
//# sourceMappingURL=brands.service.js.map
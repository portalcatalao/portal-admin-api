import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';
import { FindBrandDto } from './dto/find-brand.dto';
export declare class BrandsService {
    private brandRepository;
    constructor(brandRepository: Repository<Brand>);
    create(createBrandDto: CreateBrandDto): Promise<{
        success: boolean;
        result: Brand;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findAll(queryDto?: FindBrandDto): Promise<{
        success: boolean;
        results: Brand[];
        total: number;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        results?: undefined;
        total?: undefined;
    }>;
    findOne(id: number): Promise<{
        success: boolean;
        result: Brand;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    update(id: number, updateBrandDto: UpdateBrandDto): Promise<{
        success: boolean;
        result: Brand;
        message: string;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    remove(id: number): Promise<{
        success: boolean;
        message: any;
    }>;
}

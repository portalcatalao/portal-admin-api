import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { FindBrandDto } from './dto/find-brand.dto';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    create(createBrandDto: CreateBrandDto): Promise<{
        success: boolean;
        result: import("./entities/brand.entity").Brand;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findAll(query: FindBrandDto): Promise<{
        success: boolean;
        results: import("./entities/brand.entity").Brand[];
        total: number;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        results?: undefined;
        total?: undefined;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        result: import("./entities/brand.entity").Brand;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<{
        success: boolean;
        result: import("./entities/brand.entity").Brand;
        message: string;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: any;
    }>;
}

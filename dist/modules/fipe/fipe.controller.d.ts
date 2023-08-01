import { FipeService } from './fipe.service';
import { FindFipeBrandDto, FindFipeDetailsCodeDto, FindFipeDetailsDto, FindFipeDto, FindFipeModelsDto, FindFipeYearsDto } from './dto/find-fipe.dto';
export declare class FipeController {
    private readonly fipeService;
    constructor(fipeService: FipeService);
    findReference(): Promise<{
        success: boolean;
        results: any;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        results?: undefined;
    }>;
    findBrands(query: FindFipeBrandDto): Promise<{
        success: boolean;
        results: any;
        total: any;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        results?: undefined;
        total?: undefined;
    }>;
    findModels(query: FindFipeModelsDto): Promise<{
        success: boolean;
        results: any;
        total: any;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        results?: undefined;
        total?: undefined;
    }>;
    findYears(query: FindFipeYearsDto): Promise<{
        success: boolean;
        results: any;
        total: any;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        results?: undefined;
        total?: undefined;
    }>;
    findDetails(query: FindFipeDetailsDto): Promise<{
        success: boolean;
        result: {
            price: any;
            brand: any;
            model: any;
            year: any;
            fuel: any;
            fipe: any;
            reference: any;
            auth: any;
            type: any;
            fuelSig: any;
            dateQuery: any;
        };
        total: any;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
        total?: undefined;
    }>;
    findDetailsByCode(query: FindFipeDetailsCodeDto): Promise<{
        success: boolean;
        result: {
            price: any;
            brand: any;
            model: any;
            year: any;
            fuel: any;
            fipe: any;
            reference: any;
            auth: any;
            type: any;
            fuelSig: any;
            dateQuery: any;
        };
        total: any;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
        total?: undefined;
    }>;
    findByFipe(query: FindFipeDto): Promise<{
        success: boolean;
        results: any;
        total: any;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        results?: undefined;
        total?: undefined;
    }>;
}

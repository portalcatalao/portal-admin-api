import { YearVersionModelsService } from './year_version_models.service';
import { CreateYearVersionModelDto } from './dto/create-year_version_model.dto';
import { UpdateYearVersionModelDto } from './dto/update-year_version_model.dto';
import { FindYearVersionModelDto } from './dto/find-year-version-model.dto';
export declare class YearVersionModelsController {
    private readonly yearVersionModelsService;
    constructor(yearVersionModelsService: YearVersionModelsService);
    create(createYearVersionModelDto: CreateYearVersionModelDto): Promise<{
        success: boolean;
        result: import("./entities/year_version_model.entity").YearVersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findAll(query: FindYearVersionModelDto): Promise<{
        success: boolean;
        results: import("./entities/year_version_model.entity").YearVersionModel[];
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
        result: import("./entities/year_version_model.entity").YearVersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    update(id: string, updateYearVersionModelDto: UpdateYearVersionModelDto): Promise<{
        success: boolean;
        result: import("./entities/year_version_model.entity").YearVersionModel;
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

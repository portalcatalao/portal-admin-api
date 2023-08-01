import { CreateYearVersionModelDto } from './dto/create-year_version_model.dto';
import { UpdateYearVersionModelDto } from './dto/update-year_version_model.dto';
import { YearVersionModel } from './entities/year_version_model.entity';
import { Repository } from 'typeorm';
import { FindYearVersionModelDto } from './dto/find-year-version-model.dto';
export declare class YearVersionModelsService {
    private yearVersionModelRepository;
    constructor(yearVersionModelRepository: Repository<YearVersionModel>);
    create(createYearVersionModelDto: CreateYearVersionModelDto): Promise<{
        success: boolean;
        result: YearVersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findAll(queryDto: FindYearVersionModelDto): Promise<{
        success: boolean;
        results: YearVersionModel[];
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
        result: YearVersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    update(id: number, updateYearVersionModelDto: UpdateYearVersionModelDto): Promise<{
        success: boolean;
        result: YearVersionModel;
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

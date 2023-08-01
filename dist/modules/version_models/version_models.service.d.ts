import { CreateVersionModelDto } from './dto/create-version_model.dto';
import { UpdateVersionModelDto } from './dto/update-version_model.dto';
import { VersionModel } from './entities/version_model.entity';
import { Repository } from 'typeorm';
import { FindVersionModelDto } from './dto/find-version-model.dto';
export declare class VersionModelsService {
    private versionModelRepository;
    constructor(versionModelRepository: Repository<VersionModel>);
    create(createVersionModelDto: CreateVersionModelDto): Promise<{
        success: boolean;
        result: VersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findAll(queryDto: FindVersionModelDto): Promise<{
        success: boolean;
        results: VersionModel[];
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
        result: VersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findOneByFipe(fipe_code: string): Promise<{
        success: boolean;
        result: VersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    update(id: number, updateVersionModelDto: UpdateVersionModelDto): Promise<{
        success: boolean;
        result: VersionModel;
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

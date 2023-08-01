import { VersionModelsService } from './version_models.service';
import { CreateVersionModelDto } from './dto/create-version_model.dto';
import { UpdateVersionModelDto } from './dto/update-version_model.dto';
import { FindVersionModelDto } from './dto/find-version-model.dto';
export declare class VersionModelsController {
    private readonly versionModelsService;
    constructor(versionModelsService: VersionModelsService);
    create(createVersionModelDto: CreateVersionModelDto): Promise<{
        success: boolean;
        result: import("./entities/version_model.entity").VersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findAll(query: FindVersionModelDto): Promise<{
        success: boolean;
        results: import("./entities/version_model.entity").VersionModel[];
        total: number;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        results?: undefined;
        total?: undefined;
    }>;
    findOneByFipe(id: string): Promise<{
        success: boolean;
        result: import("./entities/version_model.entity").VersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        result: import("./entities/version_model.entity").VersionModel;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    update(id: string, updateVersionModelDto: UpdateVersionModelDto): Promise<{
        success: boolean;
        result: import("./entities/version_model.entity").VersionModel;
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

import { ModelsService } from './models.service';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { FindModelDto } from './dto/find-model.dto';
export declare class ModelsController {
    private readonly modelsService;
    constructor(modelsService: ModelsService);
    create(createModelDto: CreateModelDto): Promise<{
        success: boolean;
        result: import("./entities/model.entity").Model;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findAll(query: FindModelDto): Promise<{
        success: boolean;
        results: import("./entities/model.entity").Model[];
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
        result: import("./entities/model.entity").Model;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    update(id: string, updateModelDto: UpdateModelDto): Promise<{
        success: boolean;
        result: import("./entities/model.entity").Model;
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

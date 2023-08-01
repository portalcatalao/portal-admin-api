import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { Model } from './entities/model.entity';
import { Repository } from 'typeorm';
import { FindModelDto } from './dto/find-model.dto';
export declare class ModelsService {
    private modelRepository;
    constructor(modelRepository: Repository<Model>);
    create(createModelDto: CreateModelDto): Promise<{
        success: boolean;
        result: Model;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    findAll(queryDto: FindModelDto): Promise<{
        success: boolean;
        results: Model[];
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
        result: Model;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        result?: undefined;
    }>;
    update(id: number, updateModelDto: UpdateModelDto): Promise<{
        success: boolean;
        result: Model;
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

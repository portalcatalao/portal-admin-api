import { Model } from "src/modules/models/entities/model.entity";
import { YearVersionModel } from "src/modules/year_version_models/entities/year_version_model.entity";
export declare class CreateVersionModelDto {
    model: Model;
    name: string;
    id_string: string;
    fipe_code: string;
    type: string;
    years: YearVersionModel[];
}

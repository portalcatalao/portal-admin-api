import { VersionModel } from "src/modules/version_models/entities/version_model.entity";
export declare class CreateYearVersionModelDto {
    versionModel: VersionModel;
    year_model: number;
    price: number;
    name: string;
    code: string;
    history: string | null;
    last_update_at: Date;
    reference_month: string;
}

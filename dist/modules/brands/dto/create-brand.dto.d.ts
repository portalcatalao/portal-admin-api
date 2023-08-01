import { Model } from "src/modules/models/entities/model.entity";
export declare class CreateBrandDto {
    name: string;
    id_string: string;
    ico: string | null;
    type: string;
    models: Model[];
}

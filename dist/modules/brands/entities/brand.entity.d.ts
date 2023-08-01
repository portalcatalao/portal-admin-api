import { Model } from 'src/modules/models/entities/model.entity';
export declare class Brand {
    id: number;
    name: string;
    id_string: string;
    ico: string | null;
    type: string;
    models: Model[];
}

import { Brand } from 'src/modules/brands/entities/brand.entity';
import { VersionModel } from 'src/modules/version_models/entities/version_model.entity';
export declare class Model {
    id: number;
    brand: Brand;
    name: string;
    id_string: string;
    ico: string | null;
    type: string;
    versions: VersionModel[];
}

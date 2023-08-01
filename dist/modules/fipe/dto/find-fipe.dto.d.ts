export declare class FindFipeBrandDto {
    type: number;
    reference: number;
}
export declare class FindFipeModelsDto {
    type: number;
    reference: number;
    brandId: number;
}
export declare class FindFipeYearsDto {
    type: number;
    reference: number;
    modelId: number;
    brandId: number;
}
export declare class FindFipeDetailsDto {
    type: number;
    reference: number;
    modelId: number;
    brandId: number;
    year: string;
    fuelType: number;
}
export declare class FindFipeDetailsCodeDto {
    type: number;
    reference: number;
    year: string;
    fuelType: number;
    fipe: string;
}
export declare class FindFipeDto {
    type: number;
    reference: number;
    fipe: string;
}

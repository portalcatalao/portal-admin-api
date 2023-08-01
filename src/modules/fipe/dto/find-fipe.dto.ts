export class FindFipeBrandDto {
    type: number;
    reference: number;
}
export class FindFipeModelsDto {
    type: number;
    reference: number;
    brandId: number;
}
export class FindFipeYearsDto {
    type: number;
    reference: number;
    modelId: number;
    brandId: number;
}
export class FindFipeDetailsDto {
    type: number;
    reference: number;
    modelId: number;
    brandId: number;
    year: string;
    fuelType: number;
}
export class FindFipeDetailsCodeDto {
    type: number;
    reference: number;
    year: string;
    fuelType: number;
    fipe: string;
}
export class FindFipeDto {
    type: number;
    reference: number;
    fipe: string;
}
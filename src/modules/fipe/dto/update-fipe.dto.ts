import { PartialType } from '@nestjs/mapped-types';
import { CreateFipeDto } from './create-fipe.dto';

export class UpdateFipeDto extends PartialType(CreateFipeDto) {}

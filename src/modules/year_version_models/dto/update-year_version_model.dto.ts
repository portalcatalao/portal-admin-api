import { PartialType } from '@nestjs/mapped-types';
import { CreateYearVersionModelDto } from './create-year_version_model.dto';

export class UpdateYearVersionModelDto extends PartialType(CreateYearVersionModelDto) {}

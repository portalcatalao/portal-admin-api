import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { YearVersionModelsService } from './year_version_models.service';
import { CreateYearVersionModelDto } from './dto/create-year_version_model.dto';
import { UpdateYearVersionModelDto } from './dto/update-year_version_model.dto';
import { FindYearVersionModelDto } from './dto/find-year-version-model.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('year-version-models')
export class YearVersionModelsController {
  constructor(private readonly yearVersionModelsService: YearVersionModelsService) {}

  @Post()
  create(@Body() createYearVersionModelDto: CreateYearVersionModelDto) {
    return this.yearVersionModelsService.create(createYearVersionModelDto);
  }

  @Get()
  findAll(@Query() query: FindYearVersionModelDto) {
    return this.yearVersionModelsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.yearVersionModelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYearVersionModelDto: UpdateYearVersionModelDto) {
    return this.yearVersionModelsService.update(+id, updateYearVersionModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.yearVersionModelsService.remove(+id);
  }
}

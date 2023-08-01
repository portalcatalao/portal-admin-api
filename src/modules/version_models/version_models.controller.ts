import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { VersionModelsService } from './version_models.service';
import { CreateVersionModelDto } from './dto/create-version_model.dto';
import { UpdateVersionModelDto } from './dto/update-version_model.dto';
import { FindVersionModelDto } from './dto/find-version-model.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('version-models')
export class VersionModelsController {
  constructor(private readonly versionModelsService: VersionModelsService) {}

  @Post()
  create(@Body() createVersionModelDto: CreateVersionModelDto) {
    return this.versionModelsService.create(createVersionModelDto);
  }

  @Get()
  findAll(@Query() query: FindVersionModelDto) {
    return this.versionModelsService.findAll(query);
  }

  @Get('fipe/:id')
  findOneByFipe(@Param('id') id: string) {
    return this.versionModelsService.findOneByFipe(id);
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.versionModelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVersionModelDto: UpdateVersionModelDto) {
    return this.versionModelsService.update(+id, updateVersionModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versionModelsService.remove(+id);
  }
}

import { Module } from '@nestjs/common';
import { YearVersionModelsService } from './year_version_models.service';
import { YearVersionModelsController } from './year_version_models.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YearVersionModel } from './entities/year_version_model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([YearVersionModel])],
  controllers: [YearVersionModelsController],
  providers: [YearVersionModelsService]
})
export class YearVersionModelsModule {}

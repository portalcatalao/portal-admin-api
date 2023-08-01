import { Module } from '@nestjs/common';
import { VersionModelsService } from './version_models.service';
import { VersionModelsController } from './version_models.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VersionModel } from './entities/version_model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VersionModel])],
  controllers: [VersionModelsController],
  providers: [VersionModelsService]
})
export class VersionModelsModule {}

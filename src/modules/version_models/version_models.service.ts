import { Injectable } from '@nestjs/common';
import { CreateVersionModelDto } from './dto/create-version_model.dto';
import { UpdateVersionModelDto } from './dto/update-version_model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VersionModel } from './entities/version_model.entity';
import { Repository } from 'typeorm';
import { FindVersionModelDto } from './dto/find-version-model.dto';
import slugify from 'slugify';

@Injectable()
export class VersionModelsService {
  constructor(
    @InjectRepository(VersionModel) private versionModelRepository: Repository<VersionModel>
  ) {}

  async create(createVersionModelDto: CreateVersionModelDto) {
    try {
      const id_string = createVersionModelDto.name ? slugify(createVersionModelDto.name, {lower: true}) : null;
      const version = this.versionModelRepository.create({...createVersionModelDto, id_string});
      return {
        success: true,
        result: await this.versionModelRepository.save(version)
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findAll(queryDto: FindVersionModelDto) {
    try {
      const { "model-id": modelId, "brand-id-string": brandIdString, type } = queryDto;

      const query = this.versionModelRepository.createQueryBuilder('versionModel')
        .leftJoinAndSelect('versionModel.model', 'model')
        .leftJoinAndSelect('model.brand', 'brand')
        .leftJoinAndSelect('versionModel.years', 'year');

      { modelId ? query.andWhere('model.id = :modelId', { modelId }) : null }
      { brandIdString ? query.andWhere('brand.id_string = :brandIdString', { brandIdString }) : null }
      { type ? query.andWhere('versionModel.type = :type', { type }) : null }

      const [results, total] = await query.getManyAndCount();

      return {
        success: true,
        results,
        total
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findOne(id: number) {
    try {
      return {
        success: true,
        result: await this.versionModelRepository.findOneBy({id})
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
  
  async findOneByFipe(fipe_code: string) {
    try {
      return {
        success: true,
        result: await this.versionModelRepository.findOneBy({fipe_code})
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async update(id: number, updateVersionModelDto: UpdateVersionModelDto) {
    try {
      const version = await this.versionModelRepository.findOneBy({id});
      if(!version) throw new Error('Versão não encontrada.');

      const id_string = updateVersionModelDto.name ? slugify(updateVersionModelDto.name, {lower: true}) : null;

      await this.versionModelRepository.update(id, {...updateVersionModelDto, id_string: id_string ?? version.id_string});

      return {
        success: true,
        result: await this.versionModelRepository.findOneBy({id}),
        message: 'Versão atualizada com sucesso'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async remove(id: number) {
    try {
      const version = await this.versionModelRepository.findOneBy({id});
      if(!version) throw new Error('Versão não encontrada.');

      await this.versionModelRepository.delete(id);

      return {
        success: true,
        message: 'Versão removida com sucesso'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}

import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';
import { Repository } from 'typeorm';
import { FindModelDto } from './dto/find-model.dto';
import slugify from 'slugify';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model) private modelRepository: Repository<Model>
  ) { }

  async create(createModelDto: CreateModelDto) {
    try {
      const id_string = createModelDto.name ? slugify(createModelDto.name, {lower: true}) : null;
      const model = this.modelRepository.create({...createModelDto, id_string});
      return {
        success: true,
        result: await this.modelRepository.save(model)
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findAll(queryDto: FindModelDto) {
    try {
      const { "brand-id": brandId, "brand-id-string": brandIdString, type } = queryDto;

      const query = this.modelRepository.createQueryBuilder('model')
        .leftJoinAndSelect('model.brand', 'brand');

      console.log(queryDto);

      { brandId ? query.andWhere('brand.id = :brandId', { brandId }) : null }
      { brandIdString ? query.andWhere('brand.id_string = :brandIdString', { brandIdString }) : null }
      { type ? query.andWhere('model.type = :type', { type }) : null }

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
        result: await this.modelRepository.findOneBy({id})
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async update(id: number, updateModelDto: UpdateModelDto) {
    try {
      const model = await this.modelRepository.findOneBy({id});
      if(!model) throw new Error('Modelo não encontrado.');

      await this.modelRepository.update(id, updateModelDto);

      return {
        success: true,
        result: await this.modelRepository.findOneBy({id}),
        message: 'Modelo atualizado com sucesso'
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
      const model = await this.modelRepository.findOneBy({id});
      if(!model) throw new Error('Modelo não encontrado.');

      await this.modelRepository.delete(id);

      return {
        success: true,
        message: 'Modelo removido com sucesso'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}

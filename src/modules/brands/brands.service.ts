import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { Repository } from 'typeorm';
import slugify from 'slugify';
import { FindBrandDto } from './dto/find-brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand) private brandRepository: Repository<Brand>
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    try {
      const id_string = createBrandDto.name ? slugify(createBrandDto.name, {lower: true}) : null;
      const brand = this.brandRepository.create({...createBrandDto, id_string});
      return {
        success: true,
        result: await this.brandRepository.save(brand)
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findAll(queryDto?: FindBrandDto) {
    try {
      const {type} = queryDto;
      const query = this.brandRepository.createQueryBuilder('brand');

      {type ? query.andWhere('brand.type = :type', {type}) : null}

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
        result: await this.brandRepository.findOneBy({id}),
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    try {
      const brand = await this.brandRepository.findOneBy({id});
      if(!brand) throw new Error('Marca não encontrada.');

      await this.brandRepository.update(id, updateBrandDto);

      return {
        success: true,
        result: await this.brandRepository.findOneBy({id}),
        message: 'Marca atualizada com sucesso'
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
      const brand = await this.brandRepository.findOneBy({id});
      if(!brand) throw new Error('Marca não encontrado.');

      await this.brandRepository.delete(id);

      return {
        success: true,
        message: 'Marca removido com sucesso'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}

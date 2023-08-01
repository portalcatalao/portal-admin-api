import { Injectable } from '@nestjs/common';
import { CreateYearVersionModelDto } from './dto/create-year_version_model.dto';
import { UpdateYearVersionModelDto } from './dto/update-year_version_model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { YearVersionModel } from './entities/year_version_model.entity';
import { Repository } from 'typeorm';
import { FindYearVersionModelDto } from './dto/find-year-version-model.dto';

@Injectable()
export class YearVersionModelsService {
  constructor(
    @InjectRepository(YearVersionModel) private yearVersionModelRepository: Repository<YearVersionModel>
  ) {}

  async create(createYearVersionModelDto: CreateYearVersionModelDto) {
    try {
      const yearExists = await this.yearVersionModelRepository.findOne({where: {
        versionModel: createYearVersionModelDto.versionModel,
        year_model: createYearVersionModelDto.year_model
      }});

      if(yearExists) throw new Error('Esse ano já existe.');

      const year = this.yearVersionModelRepository.create(createYearVersionModelDto);
      return {
        success: true,
        result: await this.yearVersionModelRepository.save(year)
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findAll(queryDto: FindYearVersionModelDto) {
    try {
      const { "version-id": versionId } = queryDto;

      const query = this.yearVersionModelRepository.createQueryBuilder('yearVersionModel')
        .leftJoinAndSelect('yearVersionModel.versionModel', 'versionModel');

      { versionId ? query.andWhere('versionModel.id = :versionId', { versionId }) : null }

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
      const year = await this.yearVersionModelRepository.findOneBy({id});
      if(!year) throw new Error('Ano não encontrado.');

      return {
        success: true,
        result: year,
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async update(id: number, updateYearVersionModelDto: UpdateYearVersionModelDto) {
    try {
      const year = await this.yearVersionModelRepository.findOneBy({id});
      if(!year) throw new Error('Ano não encontrado.');

      await this.yearVersionModelRepository.update(id, updateYearVersionModelDto);

      return {
        success: true,
        result: await this.yearVersionModelRepository.findOneBy({id}),
        message: 'Ano atualizado com sucesso'
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
      const year = await this.yearVersionModelRepository.findOneBy({id});
      if(!year) throw new Error('Ano não encontrado.');

      await this.yearVersionModelRepository.delete(id);

      return {
        success: true,
        message: 'Ano removido com sucesso'
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}

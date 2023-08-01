import { Model } from 'src/modules/models/entities/model.entity';
import { YearVersionModel } from 'src/modules/year_version_models/entities/year_version_model.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, Unique } from 'typeorm';

@Entity()
@Unique(['fipe_code'])
export class VersionModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Model, model => model.versions, {onDelete: 'CASCADE', nullable: false})
  @JoinColumn({ name: 'model_id' })
  model: Model;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  id_string: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  fipe_code: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @OneToMany(() => YearVersionModel, yearVersionModel => yearVersionModel.versionModel)
  years: YearVersionModel[];
}
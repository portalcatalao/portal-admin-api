import { Brand } from 'src/modules/brands/entities/brand.entity';
import { VersionModel } from 'src/modules/version_models/entities/version_model.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Brand, brand => brand.models, {onDelete: 'CASCADE', nullable: false})
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  id_string: string;

  @Column({ type: 'longtext', nullable: true })
  ico: string | null;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @OneToMany(() => VersionModel, versionModel => versionModel.model)
  versions: VersionModel[];
}
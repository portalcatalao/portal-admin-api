import { VersionModel } from 'src/modules/version_models/entities/version_model.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class YearVersionModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => VersionModel, versionModel => versionModel.years, {onDelete: 'CASCADE', nullable: false})
  @JoinColumn({ name: 'version_model_id' })
  versionModel: VersionModel;

  @Column({ type: 'int', nullable: true })
  year_model: number;

  @Column({ type: 'decimal', precision: 12, scale: 0, nullable: true})
  price: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  code: string;

  @Column({ type: 'longtext', nullable: true })
  history: string | null;

  @Column({ type: 'datetime', nullable: true })
  last_update_at: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  reference_month: string;
}
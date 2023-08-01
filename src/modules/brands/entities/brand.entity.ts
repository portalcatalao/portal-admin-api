import { Model } from 'src/modules/models/entities/model.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  id_string: string;

  @Column({ type: 'longtext', nullable: true })
  ico: string | null;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @OneToMany(() => Model, model => model.brand)
  models: Model[];
}
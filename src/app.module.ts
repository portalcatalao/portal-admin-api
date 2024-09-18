import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsModule } from './modules/brands/brands.module';
import { ModelsModule } from './modules/models/models.module';
import { VersionModelsModule } from './modules/version_models/version_models.module';
import { YearVersionModelsModule } from './modules/year_version_models/year_version_models.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { FipeModule } from './modules/fipe/fipe.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    //TypeOrmModule.forRoot({
      //type: 'mysql',
      //host: 'localhost',
      //port: 3306,
      //username: 'root',
      //password: 'term228687535',
      //database: 'vehicles_bd',
      //entities: ["dist/**/*.entity{.ts,.js}"],
      //synchronize: true,
    //}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '193.203.175.94',
      port: 3306,
      username: u236655385_autos',
      password: 'Term228687535@',
      database: 'u236655385_autos',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    BrandsModule, 
    ModelsModule, 
    VersionModelsModule, 
    YearVersionModelsModule, FipeModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

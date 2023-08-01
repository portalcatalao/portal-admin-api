import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { FipeService } from './fipe.service';
import { FindFipeBrandDto, FindFipeDetailsCodeDto, FindFipeDetailsDto, FindFipeDto, FindFipeModelsDto, FindFipeYearsDto } from './dto/find-fipe.dto';
import { AuthGuard } from '../auth/guards/auth.guard';


@UseGuards(AuthGuard)
@Controller('fipe')
export class FipeController {
  constructor(private readonly fipeService: FipeService) {}

  @Get('references')
  findReference() {
    return this.fipeService.findReference();
  }
  
  @Get('brands')
  findBrands(@Query() query: FindFipeBrandDto) {
    return this.fipeService.findBrands(query);
  }

  @Get('models')
  findModels(@Query() query: FindFipeModelsDto) {
    return this.fipeService.findModels(query);
  }

  @Get('years')
  findYears(@Query() query: FindFipeYearsDto) {
    return this.fipeService.findYears(query);
  }

  @Get('details')
  findDetails(@Query() query: FindFipeDetailsDto) {
    return this.fipeService.findDetails(query);
  }
  
  @Get('details/code')
  findDetailsByCode(@Query() query: FindFipeDetailsCodeDto) {
    return this.fipeService.findDetailsByCode(query);
  }
  
  @Get('code')
  findByFipe(@Query() query: FindFipeDto) {
    return this.fipeService.findByFipe(query);
  }
}

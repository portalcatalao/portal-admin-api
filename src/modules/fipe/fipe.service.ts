import { Injectable } from '@nestjs/common';
import { CreateFipeDto } from './dto/create-fipe.dto';
import { UpdateFipeDto } from './dto/update-fipe.dto';
import { FindFipeBrandDto, FindFipeDetailsCodeDto, FindFipeDetailsDto, FindFipeDto, FindFipeModelsDto, FindFipeYearsDto } from './dto/find-fipe.dto';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class FipeService {
  private api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: 'https://veiculos.fipe.org.br/api/veiculos/'
    })
  }

  async findReference() {
    try {
      const res = await this.api.post('ConsultarTabelaDeReferencia').then(res => res.data);

      return {
        success: true,
        results: res?.map(item => {
          return {
            id: item.Codigo,
            name: item.Mes,
          }
        })
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findBrands(query: FindFipeBrandDto) {
    try {
      const { reference, type } = query;
      if (!reference || !type) throw new Error('Parâmetros inválidos');

      const res = await this.api.post('ConsultarMarcas', {
        codigoTipoVeiculo: type ?? 1,
        codigoTabelaReferencia: reference ?? 299
      }).then(res => res.data);

      return {
        success: true,
        results: res.map(item => {
          return {
            id: item.Value,
            name: item.Label,
          }
        }),
        total: res.length
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findModels(query: FindFipeModelsDto) {
    try {
      const { reference, type, brandId } = query;
      if (!reference || !type || !brandId) throw new Error('Parâmetros inválidos');

      const res = await this.api.post('ConsultarModelos', {
        codigoTipoVeiculo: type ?? 1,
        codigoTabelaReferencia: reference ?? 299,
        codigoMarca: brandId
      }).then(res => res.data);

      return {
        success: true,
        results: res?.Modelos.map(item => {
          return {
            id: item.Value,
            name: item.Label,
          }
        }),
        total: res?.Modelos.length
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findYears(query: FindFipeYearsDto) {
    try {
      const { reference, type, brandId, modelId } = query;
      if (!reference || !type || !brandId || !modelId) throw new Error('Parâmetros inválidos');

      const res = await this.api.post('ConsultarAnoModelo', {
        codigoTipoVeiculo: type ?? 1,
        codigoTabelaReferencia: reference ?? 299,
        codigoMarca: brandId,
        codigoModelo: modelId
      }).then(res => res.data);

      if (res.codigo === '0') throw new Error('Não foi encontrado resultados');

      return {
        success: true,
        results: res?.map(item => {
          return {
            id: item.Value,
            name: item.Label,
          }
        }),
        total: res?.length
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
  
  async findDetails(query: FindFipeDetailsDto) {
    try {
      const { reference, type, brandId, modelId, fuelType, year } = query;
      if (!reference || !type || !brandId || !modelId || !fuelType || !year) throw new Error('Parâmetros inválidos');

      const res = await this.api.post('ConsultarValorComTodosParametros', {
        codigoTipoVeiculo: type ?? 1,
        codigoTabelaReferencia: reference ?? 299,
        codigoMarca: brandId,
        codigoModelo: modelId,
        anoModelo: year,
        codigoTipoCombustivel: +type === 2 ? 1 : fuelType,
        tipoConsulta: "tradicional"
      }).then(res => res.data);

      if (res.codigo === '0') throw new Error('Não foi encontrado resultados');

      return {
        success: true,
        result: {
          price: res?.Valor,
          brand: res?.Marca,
          model: res?.Modelo,
          year: res?.AnoModelo,
          fuel: res?.Combustivel,
          fipe: res?.CodigoFipe,
          reference: res?.MesReferencia,
          auth: res?.Autenticacao,
          type: res?.TipoVeiculo,
          fuelSig: res?.SiglaCombustivel,
          dateQuery: res?.DataConsulta
        },
        total: res?.length
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
  
  async findDetailsByCode(query: FindFipeDetailsCodeDto) {
    try {
      const { reference, type, fipe, fuelType, year } = query;
      if (!reference || !type || !fipe || !fuelType || !year) throw new Error('Parâmetros inválidos');

      const res = await this.api.post('ConsultarValorComTodosParametros', {
        codigoTipoVeiculo: type ?? 1,
        codigoTabelaReferencia: reference ?? 299,
        anoModelo: year,
        codigoTipoCombustivel: +type === 2 ? 1 : fuelType,
        modeloCodigoExterno: fipe,
        tipoConsulta: "codigo"
      }).then(res => res.data);

      if (res.codigo === '0') throw new Error('Não foi encontrado resultados');

      return {
        success: true,
        result: {
          price: res?.Valor,
          brand: res?.Marca,
          model: res?.Modelo,
          year: res?.AnoModelo,
          fuel: res?.Combustivel,
          fipe: res?.CodigoFipe,
          reference: res?.MesReferencia,
          auth: res?.Autenticacao,
          type: res?.TipoVeiculo,
          fuelSig: res?.SiglaCombustivel,
          dateQuery: res?.DataConsulta
        },
        total: res?.length
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }

  async findByFipe(query: FindFipeDto) {
    try {
      const { reference, type, fipe } = query;
      if (!reference || !type || !fipe) throw new Error('Parâmetros inválidos');
  
      const res = await this.api.post('ConsultarAnoModeloPeloCodigoFipe', {
        codigoTipoVeiculo: type ?? 1,
        codigoTabelaReferencia: reference ?? 299,
        modeloCodigoExterno: fipe,
      }).then(res => res.data);
  
      if (res.codigo === '0') throw new Error('Não foi encontrado resultados');
  
      return {
        success: true,
        results: res?.map(item => {
          return {
            id: item.Value,
            name: item.Label,
          }
        }),
        total: res?.length
      }
    } catch (error) {
      return {
        success: false,
        message: error.message
      }
    }
  }
}

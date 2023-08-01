"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FipeService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let FipeService = exports.FipeService = class FipeService {
    constructor() {
        this.api = axios_1.default.create({
            baseURL: 'https://veiculos.fipe.org.br/api/veiculos/'
        });
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
                    };
                })
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findBrands(query) {
        try {
            const { reference, type } = query;
            if (!reference || !type)
                throw new Error('Parâmetros inválidos');
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
                    };
                }),
                total: res.length
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findModels(query) {
        try {
            const { reference, type, brandId } = query;
            if (!reference || !type || !brandId)
                throw new Error('Parâmetros inválidos');
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
                    };
                }),
                total: res?.Modelos.length
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findYears(query) {
        try {
            const { reference, type, brandId, modelId } = query;
            if (!reference || !type || !brandId || !modelId)
                throw new Error('Parâmetros inválidos');
            const res = await this.api.post('ConsultarAnoModelo', {
                codigoTipoVeiculo: type ?? 1,
                codigoTabelaReferencia: reference ?? 299,
                codigoMarca: brandId,
                codigoModelo: modelId
            }).then(res => res.data);
            if (res.codigo === '0')
                throw new Error('Não foi encontrado resultados');
            return {
                success: true,
                results: res?.map(item => {
                    return {
                        id: item.Value,
                        name: item.Label,
                    };
                }),
                total: res?.length
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findDetails(query) {
        try {
            const { reference, type, brandId, modelId, fuelType, year } = query;
            if (!reference || !type || !brandId || !modelId || !fuelType || !year)
                throw new Error('Parâmetros inválidos');
            const res = await this.api.post('ConsultarValorComTodosParametros', {
                codigoTipoVeiculo: type ?? 1,
                codigoTabelaReferencia: reference ?? 299,
                codigoMarca: brandId,
                codigoModelo: modelId,
                anoModelo: year,
                codigoTipoCombustivel: +type === 2 ? 1 : fuelType,
                tipoConsulta: "tradicional"
            }).then(res => res.data);
            if (res.codigo === '0')
                throw new Error('Não foi encontrado resultados');
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
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findDetailsByCode(query) {
        try {
            const { reference, type, fipe, fuelType, year } = query;
            if (!reference || !type || !fipe || !fuelType || !year)
                throw new Error('Parâmetros inválidos');
            const res = await this.api.post('ConsultarValorComTodosParametros', {
                codigoTipoVeiculo: type ?? 1,
                codigoTabelaReferencia: reference ?? 299,
                anoModelo: year,
                codigoTipoCombustivel: +type === 2 ? 1 : fuelType,
                modeloCodigoExterno: fipe,
                tipoConsulta: "codigo"
            }).then(res => res.data);
            if (res.codigo === '0')
                throw new Error('Não foi encontrado resultados');
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
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async findByFipe(query) {
        try {
            const { reference, type, fipe } = query;
            if (!reference || !type || !fipe)
                throw new Error('Parâmetros inválidos');
            const res = await this.api.post('ConsultarAnoModeloPeloCodigoFipe', {
                codigoTipoVeiculo: type ?? 1,
                codigoTabelaReferencia: reference ?? 299,
                modeloCodigoExterno: fipe,
            }).then(res => res.data);
            if (res.codigo === '0')
                throw new Error('Não foi encontrado resultados');
            return {
                success: true,
                results: res?.map(item => {
                    return {
                        id: item.Value,
                        name: item.Label,
                    };
                }),
                total: res?.length
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
};
exports.FipeService = FipeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FipeService);
//# sourceMappingURL=fipe.service.js.map
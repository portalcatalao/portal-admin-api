"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVersionModelDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_version_model_dto_1 = require("./create-version_model.dto");
class UpdateVersionModelDto extends (0, mapped_types_1.PartialType)(create_version_model_dto_1.CreateVersionModelDto) {
}
exports.UpdateVersionModelDto = UpdateVersionModelDto;
//# sourceMappingURL=update-version_model.dto.js.map
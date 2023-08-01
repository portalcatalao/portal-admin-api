"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFipeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_fipe_dto_1 = require("./create-fipe.dto");
class UpdateFipeDto extends (0, mapped_types_1.PartialType)(create_fipe_dto_1.CreateFipeDto) {
}
exports.UpdateFipeDto = UpdateFipeDto;
//# sourceMappingURL=update-fipe.dto.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenProduccionController = void 0;
const common_1 = require("@nestjs/common");
const op_service_1 = require("../../op.service");
let OrdenProduccionController = class OrdenProduccionController {
    constructor(OPService) {
        this.OPService = OPService;
    }
    async avgOperationFailure(id) {
        return this.OPService.opProductionModule(id);
    }
};
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdenProduccionController.prototype, "avgOperationFailure", null);
OrdenProduccionController = __decorate([
    (0, common_1.Controller)("order-production"),
    __metadata("design:paramtypes", [op_service_1.OPService])
], OrdenProduccionController);
exports.OrdenProduccionController = OrdenProduccionController;
//# sourceMappingURL=oreden-produccio.controller.js.map
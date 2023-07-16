"use strict";
exports.__esModule = true;
exports.Requestor = void 0;
var common_1 = require("@nestjs/common");
exports.Requestor = (0, common_1.createParamDecorator)(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return request.user;
});

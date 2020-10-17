"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@Injectable()
var ListItemService = /** @class */ (function () {
    function ListItemService(http) {
        this.http = http;
    }
    ListItemService.prototype.add = function (listItem) {
        return this.http.post('/api/listitems/', listItem);
    };
    return ListItemService;
}());
exports.ListItemService = ListItemService;
//# sourceMappingURL=list-item.service.js.map
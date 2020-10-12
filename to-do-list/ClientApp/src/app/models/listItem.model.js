"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
var ListItem = /** @class */ (function () {
    function ListItem(obj) {
        this.id = 0;
        this.description = '';
        this.created = new Date;
        this.updated = new Date;
        if (obj) {
            this.id = obj.id;
            this.description = obj.description;
            this.created = obj.created;
            this.updated = obj.updated;
        }
    }
    return ListItem;
}());
exports.ListItem = ListItem;
//# sourceMappingURL=listItem.model.js.map
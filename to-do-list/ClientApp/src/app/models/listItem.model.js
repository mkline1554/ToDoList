"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListItem = /** @class */ (function () {
    function ListItem(obj) {
        this.id = 0;
        this.created = new Date;
        this.updated = new Date;
        this.due = new Date;
        if (obj) {
            this.id = obj.id;
            this.title = obj.title;
            this.description = obj.description;
            this.importance = obj.importance;
            this.type = obj.type;
            this.created = obj.created;
            this.updated = obj.updated;
            this.due = obj.due;
            this.completed = obj.completed;
        }
    }
    return ListItem;
}());
exports.ListItem = ListItem;
//# sourceMappingURL=listItem.model.js.map
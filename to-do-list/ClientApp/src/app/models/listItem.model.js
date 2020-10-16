"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListItem = /** @class */ (function () {
    function ListItem(obj) {
        this.id = 0;
        this.description = '';
        this.created = new Date;
        this.updated = new Date;
        this.due = new Date;
        if (obj) {
            this.id = obj.id;
            this.description = obj.description;
            this.isRecurring = obj.isRecurring;
            this.frequency = obj.frequency;
            this.importance = obj.importance;
            this.created = obj.created;
            this.updated = obj.updated;
            this.due = obj.due;
            this.completed = obj.completed;
        }
    }
    return ListItem;
}());
exports.ListItem = ListItem;
var Category = /** @class */ (function () {
    function Category() {
        this.id = 0;
        this.name = '';
    }
    return Category;
}());
exports.Category = Category;
var Type = /** @class */ (function () {
    function Type() {
        this.id = 0;
        this.name = '';
    }
    return Type;
}());
exports.Type = Type;
var Importance;
(function (Importance) {
    Importance[Importance["Low"] = 0] = "Low";
    Importance[Importance["Medium"] = 1] = "Medium";
    Importance[Importance["High"] = 2] = "High";
})(Importance || (Importance = {}));
var Frequency;
(function (Frequency) {
    Frequency[Frequency["Daily"] = 0] = "Daily";
    Frequency[Frequency["Weekly"] = 1] = "Weekly";
    Frequency[Frequency["BiWeekly"] = 2] = "BiWeekly";
    Frequency[Frequency["Monthly"] = 3] = "Monthly";
    Frequency[Frequency["Quarterly"] = 4] = "Quarterly";
    Frequency[Frequency["Yearly"] = 5] = "Yearly";
})(Frequency || (Frequency = {}));
//# sourceMappingURL=listItem.model.js.map
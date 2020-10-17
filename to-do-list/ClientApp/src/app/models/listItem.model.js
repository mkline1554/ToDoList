"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListItem = /** @class */ (function () {
    function ListItem(obj) {
        this.id = 0;
        this.title = '';
        this.description = '';
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
var Type;
(function (Type) {
    Type[Type["Errand"] = 0] = "Errand";
    Type[Type["Chore"] = 1] = "Chore";
    Type[Type["Work"] = 2] = "Work";
    Type[Type["Task"] = 3] = "Task";
    Type[Type["Personal"] = 4] = "Personal";
    Type[Type["Special"] = 5] = "Special";
    Type[Type["Other"] = 6] = "Other";
})(Type || (Type = {}));
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
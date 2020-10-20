"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Type;
(function (Type) {
    Type[Type["Errand"] = 0] = "Errand";
    Type[Type["Chore"] = 1] = "Chore";
    Type[Type["Work"] = 2] = "Work";
    Type[Type["Task"] = 3] = "Task";
    Type[Type["Personal"] = 4] = "Personal";
    Type[Type["Special"] = 5] = "Special";
    Type[Type["Other"] = 6] = "Other";
})(Type = exports.Type || (exports.Type = {}));
var Importance;
(function (Importance) {
    Importance[Importance["Low"] = 0] = "Low";
    Importance[Importance["Medium"] = 1] = "Medium";
    Importance[Importance["High"] = 2] = "High";
})(Importance = exports.Importance || (exports.Importance = {}));
var DueByWindow;
(function (DueByWindow) {
    DueByWindow[DueByWindow["Overdue"] = 0] = "Overdue";
    DueByWindow[DueByWindow["Today"] = 1] = "Today";
    DueByWindow[DueByWindow["Tomorrow"] = 2] = "Tomorrow";
    DueByWindow[DueByWindow["ThisWeek"] = 3] = "ThisWeek";
    DueByWindow[DueByWindow["NextWeek"] = 4] = "NextWeek";
    DueByWindow[DueByWindow["Upcoming"] = 5] = "Upcoming";
})(DueByWindow = exports.DueByWindow || (exports.DueByWindow = {}));
exports.ImportanceOptions = ["Low", "Medium", "High"];
exports.TypeOptions = ["Errand", "Chore", "Work", "Task", "Personal", "Special", "Other"];
exports.SortByOptions = ["Due Date", "Importance", "Type",];
//# sourceMappingURL=enums-and-constants.js.map
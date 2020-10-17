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
var Frequency;
(function (Frequency) {
    Frequency[Frequency["Daily"] = 0] = "Daily";
    Frequency[Frequency["Weekly"] = 1] = "Weekly";
    Frequency[Frequency["BiWeekly"] = 2] = "BiWeekly";
    Frequency[Frequency["Monthly"] = 3] = "Monthly";
    Frequency[Frequency["Quarterly"] = 4] = "Quarterly";
    Frequency[Frequency["Yearly"] = 5] = "Yearly";
})(Frequency = exports.Frequency || (exports.Frequency = {}));
var DueByWindow;
(function (DueByWindow) {
    DueByWindow[DueByWindow["Overdue"] = 0] = "Overdue";
    DueByWindow[DueByWindow["Today"] = 1] = "Today";
    DueByWindow[DueByWindow["Tomorrow"] = 2] = "Tomorrow";
    DueByWindow[DueByWindow["ThisWeek"] = 3] = "ThisWeek";
    DueByWindow[DueByWindow["NextWeek"] = 4] = "NextWeek";
    DueByWindow[DueByWindow["Upcoming"] = 5] = "Upcoming";
})(DueByWindow = exports.DueByWindow || (exports.DueByWindow = {}));
exports.ImportanceOptions = [
    { name: "Low", value: 0 },
    { name: "Medium", value: 1 },
    { name: "High", value: 2 }
];
exports.TypeOptions = [
    { name: "Errand", value: 0 },
    { name: "Chore", value: 1 },
    { name: "Work", value: 2 },
    { name: "Task", value: 3 },
    { name: "Personal", value: 4 },
    { name: "Special", value: 5 },
    { name: "Other", value: 6 }
];
exports.SortByOptions = [
    { name: "Due Date", value: 0 },
    { name: "Importance", value: 1 },
    { name: "Type", value: 2 }
];
//# sourceMappingURL=enums-and-constants.js.map
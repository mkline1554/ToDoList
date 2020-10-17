export enum Type {
  Errand,
  Chore,
  Work,
  Task,
  Personal,
  Special,
  Other
}

export enum Importance {
  Low,
  Medium,
  High
}

export enum Frequency {
  Daily,
  Weekly,
  BiWeekly,
  Monthly,
  Quarterly,
  Yearly
}

export enum DueByWindow {
  Overdue,
  Today,
  Tomorrow,
  ThisWeek,
  NextWeek,
  Upcoming
}

export const ImportanceOptions = [
  { name: "Low", value: 0 },
  { name: "Medium", value: 1 },
  { name: "High", value: 2 }
];

export const TypeOptions = [
  { name: "Errand", value: 0 },
  { name: "Chore", value: 1 },
  { name: "Work", value: 2 },
  { name: "Task", value: 3 },
  { name: "Personal", value: 4 },
  { name: "Special", value: 5 },
  { name: "Other", value: 6 }
];

export const SortByOptions = [
  { name: "Due Date", value: 0 },
  { name: "Importance", value: 1 },
  { name: "Type", value: 2 }
];

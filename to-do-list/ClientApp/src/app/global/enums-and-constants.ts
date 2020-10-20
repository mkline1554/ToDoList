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

export enum DueByWindow {
  Overdue,
  Today,
  Tomorrow,
  ThisWeek,
  NextWeek,
  Upcoming
}

export const ImportanceOptions = [ "Low", "Medium", "High" ];

export const TypeOptions = [ "Errand", "Chore", "Work", "Task", "Personal", "Special", "Other" ];

export const SortByOptions = [ "Due Date", "Importance", "Type", ];

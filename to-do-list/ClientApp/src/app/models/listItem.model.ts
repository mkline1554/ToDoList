export class ListItem {
  id: number = 0;

  description: string = '';
  isRecurring: boolean;

  frequency: Frequency;
  importance: Importance;

  created: Date = new Date;
  updated: Date = new Date;
  due: Date = new Date;
  completed?: Date;

  constructor()
  constructor(obj: ListItem)
  constructor(obj?: ListItem) {
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
}

export class Category {
  id: number = 0;

  name: string = '';
}

export class Type {
  id: number = 0;

  name: string = '';
}

enum Importance {
  Low,
  Medium,
  High
}

enum Frequency {
  Daily,
  Weekly,
  BiWeekly,
  Monthly,
  Quarterly,
  Yearly
}

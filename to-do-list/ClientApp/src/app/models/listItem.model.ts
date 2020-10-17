export class ListItem {
  id: number = 0;

  title: string = '';
  description: string = '';

  importance: string;
  type: string;

  created: Date = new Date;
  updated: Date = new Date;
  due: Date = new Date;
  completed?: Date;

  dueBy: string;

  constructor()
  constructor(obj: ListItem)
  constructor(obj?: ListItem) {
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
}


enum Type {
  Errand,
  Chore,
  Work,
  Task,
  Personal,
  Special,
  Other
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

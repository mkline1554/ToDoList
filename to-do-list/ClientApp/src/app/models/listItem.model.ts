import { DueByWindow } from "../global/enums-and-constants";

export class ListItem {
  id: number = 0;

  title: string;
  description: string;

  importance: string;
  type: string;

  created: Date = new Date;
  updated: Date = new Date;
  due: Date = new Date;
  completed?: Date;

  dueBy: DueByWindow;

  constructor()
  constructor(obj: any)
  constructor(obj?: any) {
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

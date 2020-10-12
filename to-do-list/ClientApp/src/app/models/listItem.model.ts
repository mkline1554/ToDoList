export class ListItem {
  id: number = 0;

  description: string = '';

  created: Date = new Date;
  updated: Date = new Date;

  constructor()
  constructor(obj: ListItem)
  constructor(obj?: ListItem) {
    if (obj) {
      this.id = obj.id;

      this.description = obj.description;

      this.created = obj.created;
      this.updated = obj.updated;
    }
  }
}

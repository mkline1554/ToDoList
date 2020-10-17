using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using to_do_list.Data;
using to_do_list.Models;

namespace to_do_list.Repositories
{
    public class ListItemsRepository : IListItemsRepository
    {
        private readonly DataContext context;

        public ListItemsRepository(DataContext context)
        {
            this.context = context;
        }

        public IEnumerable<ListItem> Get() => this.context.ListItems.OrderBy(i => i.Type);

        public ListItem Get(int id) => this.context.ListItems.FirstOrDefault(li => li.Id == id);

        public ListItem Add(ListItem item)
        {
            this.context.ListItems.Add(item);
            this.context.SaveChanges();

            return item;
        }

        public IEnumerable<ListItem> Update(ListItem item)
        {
            ListItem existingItem = this.context.ListItems.FirstOrDefault(li => li.Id == item.Id);

            existingItem.Update(item);
            this.context.ListItems.Update(existingItem);
            this.context.SaveChanges();

            return this.Get();
        }

        public IEnumerable<ListItem> Complete(ListItem item)
        {
            item.Completed = DateTime.Now;
            return this.Update(item);
        }

        public IEnumerable<ListItem> Delete(int id)
        {
            ListItem existingItem = this.context.ListItems.FirstOrDefault(li => li.Id == id);

            this.context.ListItems.Remove(existingItem);
            this.context.SaveChanges();

            return this.context.ListItems;
        }
    }
}

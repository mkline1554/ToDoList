using System.Collections.Generic;
using to_do_list.Models;

namespace to_do_list.Repositories
{
    public interface IListItemsRepository
    {
        ListItem Add(ListItem item);
        IEnumerable<ListItem> Delete(int id);
        IEnumerable<ListItem> Get();
        ListItem Get(int id);
        IEnumerable<ListItem> Update(ListItem item);
        IEnumerable<ListItem> Complete(ListItem item);
    }
}
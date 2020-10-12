using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace to_do_list.Models
{
    public class ListItem
    {
        [Key]
        public int Id { get; set; }

        public string Description { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }

        public void Update(ListItem obj)
        {
            if (obj != null)
            {
                this.Description = obj.Description;
                this.Updated = DateTime.Now;
            }
        }
    }
}

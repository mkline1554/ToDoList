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
        public bool IsRecurring { get; set; }

        public Frequency Frequency { get; set; }
        public Importance Importance { get; set; }

        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public DateTime Due { get; set; }
        public DateTime? Completed { get; set; }

        public Category Category { get; set; }
        public Type Type { get; set; }

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

public class Category
{
    [Key]
    public int Id { get; set; }

    public string Name { get; set; }
}

public class Type
{
    [Key]
    public int Id { get; set; }

    public string Name { get; set; }
}


public enum Importance
{
    Low,
    Medium,
    High
}

public enum Frequency
{
    Daily,
    Weekly,
    BiWeekly,
    Monthly,
    Quarterly,
    Yearly
}
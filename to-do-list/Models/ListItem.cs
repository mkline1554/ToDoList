using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace to_do_list.Models
{
    public class ListItem
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public string Importance { get; set; }
        public string Type { get; set; }

        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public DateTime Due { get; set; }
        public DateTime? Completed { get; set; }

        public DueByWindow DueBy => this.DetermineDueDate();

        public void Update(ListItem obj)
        {
            if (obj != null)
            {
                this.Title = obj.Title;
                this.Description = obj.Description;
                this.Importance = obj.Importance;
                this.Type = obj.Type;

                this.Updated = DateTime.Now;
                this.Due = new DateTime(obj.Due.Ticks);
                this.Completed = obj.Completed;
            }
        }

        private DueByWindow DetermineDueDate()
        {
            var today = DateTime.Now.Date;
            var thisWeekStart = today.AddDays(-(int)today.DayOfWeek);
            var thisWeekEnd = thisWeekStart.AddDays(7).AddSeconds(-1);
            DateTime due = this.Due.Date;

            if (today > due)
            {
                return DueByWindow.Overdue;
            } 
            else if (today.AddDays(1) > due)
            {
                return DueByWindow.Today;
            } 
            else if (today.AddDays(2) > due)
            {
                return DueByWindow.Tomorrow;
            } 
            else if (thisWeekEnd > due)
            {
                return DueByWindow.ThisWeek;
            } 
            else if (thisWeekEnd.AddDays(7) > due)
            {
                return DueByWindow.NextWeek;
            } 
            else
            {
                return DueByWindow.Upcoming;
            }
        }

    }
}


public enum Importance
{
    Low,
    Medium,
    High
}

public enum Type
{
    Errand,
    Chore,
    Work,
    Task,
    Personal,
    Special,
    Other
}

public enum DueByWindow
{
    Overdue,
    Today,
    Tomorrow,
    ThisWeek,
    NextWeek,
    Upcoming
}
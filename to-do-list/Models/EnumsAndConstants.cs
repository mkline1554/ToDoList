using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace to_do_list.Models
{
    public class EnumsAndConstants
    {
        public enum Frequency
        {
            Daily,
            Weekly,
            BiWeekly,
            Monthly,
            Yearly
        }

        public enum Section
        {
            Overdue,
            Today,
            Tomorrow,
            ThisWeek,
            NextWeek,
            Upcoming
        }
    }
}

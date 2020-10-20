using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestPlatform.ObjectModel.Engine.ClientProtocol;
using System;
using System.Collections.Generic;
using System.Text;
using to_do_list.Data;
using to_do_list.Repositories;

namespace UnitTests
{
    public class TestBase
    {
        private bool useSqlite;

        public DataContext GetDbContext()
        {
            var builder = new DbContextOptionsBuilder<DataContext>();

            if (useSqlite)
            {
                builder.UseSqlite("DataSource=memory:", x => { });
            }
            else
            {
                builder.UseInMemoryDatabase(Guid.NewGuid().ToString());
            }

            var dbContext = new DataContext(builder.Options);

            if (useSqlite)
            {
                dbContext.Database.OpenConnection();
            }

            dbContext.Database.EnsureCreated();

            return dbContext;
        }

        public void UseSqlite()
        {
            useSqlite = true;
        }
    }

}

using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using to_do_list.Data;
using to_do_list.Models;
using to_do_list.Repositories;
using Xunit;

namespace UnitTests
{
    public class RepositoryTests : TestBase
    {

        [Fact]
        public void Get_ShouldReturnThreeListItems()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            Assert.Equal(3, repo.Get().Count());
            Assert.False(repo.Get().Count() > 3);
            Assert.False(repo.Get().Count() < 3);
        }

        [Fact]
        public void Get_ShouldReturnAnEntityQueryableOfListItems()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            var actual = repo.Get();
            var expected = typeof(Microsoft.EntityFrameworkCore.Query.Internal.EntityQueryable<ListItem>);

            Assert.IsType(expected, actual);
        }

        [Fact]
        public void Get_ShouldBeOrderedByType()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            var actual = repo.Get();
            var expected = actual.OrderBy(i => i.Type);

            Assert.True(expected.SequenceEqual(actual));
        }

        [Fact]
        public void GetById_ShouldReturnTypeListItem()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            var unexpected = typeof(Microsoft.EntityFrameworkCore.Query.Internal.EntityQueryable<ListItem>);
            var expected = typeof(ListItem);
            var actual = repo.Get(2);

            Assert.IsNotType(unexpected, actual);
            Assert.IsType(expected, actual);
        }


        [Fact]
        public void GetById_ShouldReturnTheCorrectItem()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            var expectedId = 2;
            var expectedTitle = "Project";
            var expectedDescription = "Finish project by end of day on Saturday";
            var expectedImportance = "High";
            var expectedType = "Special";

            var actual = repo.Get(2);

            Assert.Equal(actual.Id, expectedId);
            Assert.Equal(actual.Title, expectedTitle);
            Assert.Equal(actual.Description, expectedDescription);
            Assert.Equal(actual.Importance, expectedImportance);
            Assert.Equal(actual.Type, expectedType);
        }


        [Fact]
        public void GetById_ShouldReturnNullIfNoMatch()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            var test1 = repo.Get(-1);
            var test2 = repo.Get(0);
            var test3 = repo.Get(4);


            Assert.Equal(test1, null);
            Assert.Equal(test2, null);
            Assert.Equal(test3, null);
        }

        [Fact]
        public void Add_ShouldIncrementTheNumberOfItemsByOne()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            var startingCount = repo.Get().Count();

            repo.Add(new ListItem
            {
                Title = "Test Add",
                Description = "Testing adding an item",
                Importance = "High",
                Type = "Special",
                Created = DateTime.Now,
                Updated = DateTime.Now,
                Due = DateTime.Now,
            });

            var endingCount = repo.Get().Count();

            Assert.NotEqual(startingCount, endingCount);
            Assert.True(endingCount == (startingCount + 1));
        }

        [Fact]
        public void Add_ShouldAssignANewId()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            var addedItem = repo.Add(new ListItem
            {
                Title = "Test Add",
                Description = "Testing adding an item",
                Importance = "High",
                Type = "Special",
                Created = DateTime.Now,
                Updated = DateTime.Now,
                Due = DateTime.Now,
            });

            Assert.NotNull(addedItem.Id);
        }

        [Fact]
        public void Update_ShouldBeAbleToUpdateAllPropertiesExceptIdAndCreated()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            DateTime tomorrow = DateTime.Now;

            ListItem updateItem = new ListItem
            {
                Id = 3,
                Title = "Schedule Date Night",
                Description = "Pick a night to have date night",
                Importance = "High",
                Type = "Special",
                Created = tomorrow,
                Updated = tomorrow,
                Due = DateTime.Now.AddDays(14),
            };

            repo.Update(updateItem);

            ListItem newlyUpdatedItem = repo.Get(updateItem.Id);

            Assert.Equal(updateItem.Title, newlyUpdatedItem.Title);
            Assert.Equal(updateItem.Description, newlyUpdatedItem.Description);
            Assert.Equal(updateItem.Importance, newlyUpdatedItem.Importance);
            Assert.Equal(updateItem.Type, newlyUpdatedItem.Type);
            Assert.NotEqual(updateItem.Created, newlyUpdatedItem.Created);
            Assert.Equal(updateItem.Updated.Date, newlyUpdatedItem.Updated.Date);
            Assert.Equal(updateItem.Due.Date, newlyUpdatedItem.Due.Date);
        }

        [Fact]
        public void Update_ShouldReturnAnEntityQueryableOfListItems()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();


            DateTime tomorrow = DateTime.Now;

            ListItem updateItem = new ListItem
            {
                Id = 3,
                Title = "Schedule Date Night",
                Description = "Pick a night to have date night",
                Importance = "High",
                Type = "Special",
                Created = tomorrow,
                Updated = tomorrow,
                Due = DateTime.Now.AddDays(14),
            };

            var actual = repo.Update(updateItem);
            var expected = typeof(Microsoft.EntityFrameworkCore.Query.Internal.EntityQueryable<ListItem>);

            Assert.IsType(expected, actual);
        }

        [Fact]
        public void Complete_ShouldUpdateTheCompletedPropertyToDateTimeNow()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            DateTime nowDate = DateTime.Now.Date;

            ListItem updateItem = new ListItem
            {
                Id = 3,
                Title = "Date Night",
                Description = "Invite Claire to date night.",
                Importance = "High",
                Type = "Special",
                Created = DateTime.Now,
                Updated = DateTime.Now,
                Due = DateTime.Now.AddDays(7),
            };

            var actual = repo.Complete(updateItem);

            ListItem newlyUpdatedItem = actual.FirstOrDefault(i => i.Id == updateItem.Id);


            Assert.Equal(newlyUpdatedItem.Completed.GetValueOrDefault().Date, nowDate);
        }

        [Fact]
        public void Complete_ShouldNotUpdateAnyPropertiesExceptCompletedAndUpdated()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            DateTime tomorrow = DateTime.Now.AddDays(1);

            ListItem updateItem = new ListItem
            {
                Id = 3,
                Title = "Schedule Date Night",
                Description = "Pick a night to have date night",
                Importance = "Low",
                Type = "Errand",
                Created = tomorrow,
                Updated = tomorrow,
                Due = DateTime.Now.AddDays(14),
            };

            var actual = repo.Complete(updateItem);

            ListItem newlyUpdatedItem = actual.FirstOrDefault(i => i.Id == updateItem.Id);


            Assert.NotEqual(newlyUpdatedItem.Title, updateItem.Title);
            Assert.NotEqual(newlyUpdatedItem.Description, updateItem.Description);
            Assert.NotEqual(newlyUpdatedItem.Importance, updateItem.Importance);
            Assert.NotEqual(newlyUpdatedItem.Type, updateItem.Type);
            Assert.NotEqual(newlyUpdatedItem.Created.Date, updateItem.Created.Date);
            Assert.Equal(newlyUpdatedItem.Updated.Date, DateTime.Now.Date);
            Assert.NotEqual(newlyUpdatedItem.Due.Date, updateItem.Due.Date);
        }

        [Fact]
        public void Delete_ShouldRemoveTheItemFromTheDatabase()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            var idToDelete = 1;

            repo.Delete(idToDelete);

            Assert.Null(repo.Get(idToDelete));
        }

        [Fact]
        public void Delete_ShouldKeepAllOtherItemsInTheDatebase()
        {
            IListItemsRepository repo = GetInMemoryListItemRepository();

            var countBeforeDelete = repo.Get().Count();
            var idToDelete = 1;

            repo.Delete(idToDelete);
            var countAfterDelete = repo.Get().Count();

            Assert.NotEqual(countBeforeDelete, countAfterDelete);
            Assert.True(countAfterDelete == (countBeforeDelete - 1));
        }


        private IListItemsRepository GetInMemoryListItemRepository()
        {
            DbContextOptions<DataContext> options;
            var builder = new DbContextOptionsBuilder<DataContext>();
            builder.UseInMemoryDatabase(Guid.NewGuid().ToString());
            options = builder.Options;
            DataContext context = new DataContext(options);
            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();
            GetAndInitDbContext(context);
            return new ListItemsRepository(context);
        }


        private void GetAndInitDbContext(DataContext context)
        {
            context.ListItems.Add(new ListItem
            {
                Id = 1,
                Title = "Shopping",
                Description = "Go buy eggs and milk from the store.",
                Importance = "Medium",
                Type = "Errand",
                Created = DateTime.Now,
                Updated = DateTime.Now,
                Due = DateTime.Now.AddDays(-1),
            });
            context.ListItems.Add(new ListItem
            {
                Id = 2,
                Title = "Project",
                Description = "Finish project by end of day on Saturday",
                Importance = "High",
                Type = "Special",
                Created = DateTime.Now,
                Updated = DateTime.Now,
                Due = DateTime.Now,
            });
            context.ListItems.Add(new ListItem
            {
                Id = 3,
                Title = "Date Night",
                Description = "Invite Claire to date night.",
                Importance = "High",
                Type = "Special",
                Created = DateTime.Now,
                Updated = DateTime.Now,
                Due = DateTime.Now.AddDays(7),
            });

            context.SaveChanges();
        }
    }
}

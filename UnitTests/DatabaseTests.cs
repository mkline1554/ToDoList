using Autofac.Extras.Moq;
using Microsoft.EntityFrameworkCore;
using NuGet.Frameworks;
using System;
using System.Collections.Generic;
using System.Linq;
using to_do_list.Controllers;
using to_do_list.Data;
using to_do_list.Models;
using to_do_list.Repositories;
using Xunit;

namespace UnitTests
{
    public class DatabaseTests : TestBase
    { 
        [Fact]
        public void ShouldBeAbleToAddListItem()
        {
            var today = DateTime.Now;
            var tomorrow = today.AddDays(1);

            using (var context = InitAndGetDbContext())
            {
                context.ListItems.Add(new ListItem
                {
                    Id=4,
                    Title = "Test Add",
                    Description = "Try to add this item",
                    Importance = "Low",
                    Type = "Task",
                    Created = today,
                    Updated = today,
                    Due = tomorrow,
                    Completed = today,
                });

                context.SaveChanges();

                Assert.Equal(1, context.ListItems.Count(i => i.Title == "Test Add"));
                Assert.Equal(1, context.ListItems.Count(i => i.Description == "Try to add this item"));
                Assert.Equal(1, context.ListItems.Count(i => i.Importance == "Low"));
                Assert.Equal(1, context.ListItems.Count(i => i.Type == "Task"));
                Assert.Equal(1, context.ListItems.Count(i => i.Created == today));
                Assert.Equal(1, context.ListItems.Count(i => i.Updated == today));
                Assert.Equal(1, context.ListItems.Count(i => i.Due == tomorrow));
                Assert.Equal(1, context.ListItems.Count(i => i.Completed == today));
            }
        }

        [Fact]
        public void ShouldReturnThreeListItems()
        {
            using (var context = InitAndGetDbContext())
            {
                var listItems = context.ListItems;

                Assert.Equal(listItems.Count(), 3);
                Assert.Equal(listItems.Where(i => i.Importance == "High").Count(), 2);
            }
        }

        [Fact]
        public void ShouldUpdateListItem()
        {
            using (var context = InitAndGetDbContext())
            {
                var updatedDate = DateTime.Now;

                ListItem updateItem = new ListItem
                {
                    Id = 2,
                    Title = "Project",
                    Description = "Finish project by end of day Monday",
                    Importance = "High",
                    Type = "Work",
                    Updated = updatedDate,
                    Due = updatedDate.AddDays(1)
                };

                var existing = context.ListItems.FirstOrDefault(i => i.Id == updateItem.Id);
                existing.Update(updateItem);

                context.ListItems.Update(existing);
                context.SaveChanges();

                Assert.True(context.ListItems.FirstOrDefault(i => i.Id == 2).Updated != updatedDate);
                Assert.Equal(existing.Title, updateItem.Title);
                Assert.Equal(existing.Description, updateItem.Description);
                Assert.Equal(existing.Importance, updateItem.Importance);
                Assert.Equal(existing.Type, updateItem.Type);
            }
        }

        [Fact]
        public void ShouldNotAddOrRemoveItemFromTheDb()
        {
            using (var context = InitAndGetDbContext())
            {
                var updatedDate = DateTime.Now;

                ListItem updateItem = new ListItem
                {
                    Id = 2,
                    Title = "Project",
                    Description = "Finish project by end of day Monday",
                    Importance = "High",
                    Type = "Work",
                    Updated = updatedDate,
                    Due = updatedDate.AddDays(1)
                };

                var existing = context.ListItems.FirstOrDefault(i => i.Id == updateItem.Id);
                existing.Update(updateItem);

                context.ListItems.Update(existing);
                context.SaveChanges();

                Assert.True(context.ListItems.Count() == 3);
                Assert.False(context.ListItems.Count() < 3);
                Assert.False(context.ListItems.Count() > 3);
            }
        }

        [Fact]
        public void ShouldRemoveItemFromTheDatabae()
        {
            using (var context = InitAndGetDbContext())
            {
                var idToDelete = 1;


                ListItem existingItem = context.ListItems.FirstOrDefault(li => li.Id == idToDelete);

                context.ListItems.Remove(existingItem);
                context.SaveChanges();

                Assert.True(context.ListItems.Count() == 2);
                Assert.Equal(context.ListItems.FirstOrDefault(i => i.Id == idToDelete), null);
            }
        }


        private DataContext InitAndGetDbContext()
        {
            var context = GetDbContext();

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
            return context;
        }



    }



}

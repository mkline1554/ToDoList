using System;
using Xunit;
using to_do_list;
using static to_do_list.Models.EnumsAndConstants;
using to_do_list.Models;

namespace UnitTests
{
    public class ListItemTests
    {
        [Theory]
        [InlineData(2020, 10, 11, Section.Overdue)]
        [InlineData(2020, 10, 12, Section.Today)]
        [InlineData(2020, 10, 13, Section.Tomorrow)]
        [InlineData(2020, 10, 17, Section.ThisWeek)]
        [InlineData(2020, 10, 18, Section.NextWeek)]
        [InlineData(2020, 10, 24, Section.NextWeek)]
        [InlineData(2020, 10, 25, Section.Upcoming)]
        public void DetermineSection_ShouldReturnAValidSection(int year, int month, int day, Section expected)
        {
            // Arrange
            ListItem target = new ListItem();
            target.DueDate = new DateTime(year, month, day);

            // Act
            Section actual = target.Section;


            // Assert
            Assert.Equal(actual, expected);
        }

        // write a test that will make sure that the item does not update if the obj is null
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using to_do_list.Models;
using to_do_list.Repositories;

namespace to_do_list.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListItemController : ControllerBase
    {
        private readonly IListItemsRepository listItemsRepo;

        public ListItemController(IListItemsRepository listItemsRepo)
        {
            this.listItemsRepo = listItemsRepo;
        }

        [HttpGet]
        public IEnumerable<ListItem> Get() =>
            this.listItemsRepo.Get();

        [HttpGet("{id}")]
        public ListItem Get(int id) =>
            this.listItemsRepo.Get(id);

        [HttpPost]
        public IEnumerable<ListItem> Add(ListItem item)
        {
            this.listItemsRepo.Add(item);
            return this.Get();
        }

        [HttpPut("[action]")]
        public ListItem Update(ListItem item) =>
            this.listItemsRepo.Update(item);

        [HttpDelete("{id}")]
        public IEnumerable<ListItem> Delete(int id) =>
            this.listItemsRepo.Delete(id);
    }
}

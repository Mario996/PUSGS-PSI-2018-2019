using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class TicketType
    {
        public int Id { get; set; }
        [Required]
        public double Price { get; set; }
        public List<PriceList> PriceLists { get; set; } = new List<PriceList>();
        public List<Ticket> Tickets { get; set; } = new List<Ticket>();
        public bool Deleted { get; set; } = false;

        public TicketType()
        {

        }

        public void Update(TicketType newValue)
        {
            Price = newValue.Price;
        }
    }
}
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.DTOs
{
    public class TicketTypeDTO
    {
        [Required]
        public double Price { get; set; }
        public string Name { get; set; }
        public List<PriceList> PriceLists { get; set; } = new List<PriceList>();
        public List<Ticket> Tickets { get; set; } = new List<Ticket>();
    }
}
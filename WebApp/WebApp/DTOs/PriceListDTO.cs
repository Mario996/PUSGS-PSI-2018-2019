using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.DTOs
{
    public class PriceListDTO
    {
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public virtual List<TicketType> TicketTypes { get; set; } = new List<TicketType>();
        public List<Ticket> Tickets = new List<Ticket>();

    }
}
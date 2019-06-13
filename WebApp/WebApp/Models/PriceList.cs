using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class PriceList
    {
        public int Id { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public bool Deleted { get; set; } = false;
        [JsonIgnore]
        public virtual List<TicketType> TicketTypes { get; set; } = new List<TicketType>();
        public List<Ticket> Tickets = new List<Ticket>();

        public PriceList()
        {

        }
    }
}
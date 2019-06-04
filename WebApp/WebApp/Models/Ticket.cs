using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public TicketType TicketType { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public FinalPrice FinalPrice { get; set; }
        public DateTime? TimeOfPurchase { get; set; }
        public DateTime? ValidUntil { get; set; }
        public bool Deleted { get; set; } = false;

        public Ticket()
        {

        }

        public void Update(Ticket newValue)
        {
            TimeOfPurchase = newValue.TimeOfPurchase;
            ValidUntil = newValue.ValidUntil;
        }
    }
}
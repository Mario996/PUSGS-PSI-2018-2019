using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.DTOs
{
    public class TicketDTO
    {
        public ApplicationUser ApplicationUser { get; set; }
        public int ApplicationUserId { get; set; }
        public TicketType TicketType { get; set; }
        public int TicketTypeId { get; set; }
        public PriceList PriceList { get; set; }
        public int PriceListId { get; set; }
        public DateTime? TimeOfPurchase { get; set; } = DateTime.Now;
        public DateTime? ValidUntil { get; set; }
        public bool Deleted { get; set; } = false;

    }
}
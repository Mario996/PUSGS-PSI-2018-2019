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
        public string ApplicationUserId { get; set; }
        public TicketType TicketType { get; set; }
        public int TicketTypeId { get; set; }
        public PriceList PriceList { get; set; }
        public int PriceListId { get; set; }
        public string TimeOfPurchase { get; set; }
        public string ValidUntil { get; set; }
        public bool Deleted { get; set; } = false;

    }
}
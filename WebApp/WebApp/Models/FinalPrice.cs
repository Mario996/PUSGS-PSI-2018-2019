using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class FinalPrice
    {
        [ForeignKey("Ticket")]
        public int Id { get; set; }
        public Ticket Ticket { get; set; }
        public TicketType TicketType { get; set; }
        public Coefficient Coefficient { get; set; }
        public DateTime? PriceStart { get; set; }
        public DateTime? PriceEnd { get; set; }
        public bool Deleted { get; set; } = false;

        public FinalPrice()
        {

        }

        public void Update(FinalPrice newValue)
        {
            PriceStart = newValue.PriceStart;
            PriceEnd = newValue.PriceEnd;
        }
    }
}
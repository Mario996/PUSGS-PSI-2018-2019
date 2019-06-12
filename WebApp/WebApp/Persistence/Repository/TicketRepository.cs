using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public class TicketRepository : Repository<Ticket, int>, ITicketRepository
    {
        protected ApplicationDbContext AppDbContext
        { get
            {
                return context as ApplicationDbContext;
            }
        }

        public TicketRepository(DbContext context) : base(context)
        {

        }

        public Ticket BuyTicketUnregistredUser(double price, int pricelistItemId)
        {
            Ticket ticket = new Ticket()
            {
                 
            };

            AppDbContext.Tickets.Add(ticket);
            AppDbContext.SaveChanges();

            return ticket;
        }

        public Ticket BuyTicketVerifiedUser(double price, int pricelistItemId, string userType, TicketType ticketType)
        {
            throw new NotImplementedException();
        }
    }
}

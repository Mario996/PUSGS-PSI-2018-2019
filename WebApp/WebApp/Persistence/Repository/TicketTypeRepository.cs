using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public class TicketTypeRepository : Repository<TicketType, int>, ITicketTypeRepository
    {
        protected ApplicationDbContext AppDbContext
        {
            get
            {
                return context as ApplicationDbContext;
            }
        }

        public TicketTypeRepository(DbContext context) : base(context)
        {

        }

        public TicketType GetTicketTypeByTicketName(string ticketName)
        {
            return AppDbContext.TicketTypes.SingleOrDefault(x => x.Name == ticketName);
        }
    }
}
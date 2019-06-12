using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public class PriceListRepository : Repository<PriceList, int>, IPriceListRepository
    {
        protected ApplicationDbContext AppDbContext
        {
            get
            {
                return context as ApplicationDbContext;
            }
        }

        public PriceListRepository(DbContext context) : base(context)
        {

        }
    }
}
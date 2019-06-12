using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository
{
    public class CoefficientRepository : Repository<Coefficient, int>, ICoefficientRepository
    {
        protected ApplicationDbContext AppDbContext
        {
            get
            {
                return context as ApplicationDbContext;
            }
        }

        public CoefficientRepository(DbContext context) : base(context)
        {

        }

        public Coefficient GetCoefficientByUserType(string userType)
        {
            return AppDbContext.Coefficients.SingleOrDefault(x => x.UserType == userType);
        }
    }
}
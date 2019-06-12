using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApp.Models;
using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity;

namespace WebApp.Persistence.Repository
{
    public class UserRepository : Repository<ApplicationUser, string>, IUserRepository
    {
        protected ApplicationDbContext AppDbContext
        {
            get
            {
                return context as ApplicationDbContext;
            }
        }

        public UserRepository(DbContext context) : base(context)
        {

        }

        public bool UpdateUser(ApplicationUser updateUser)
        {
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new UserManager<ApplicationUser>(userStore);

            IdentityResult result = userManager.Update(updateUser);

            return result.Succeeded;
        }


        public ApplicationUser GetUserByUsername(string username)
        {
            return AppDbContext.Users.SingleOrDefault(x => x.UserName == username);
        }
    }
}
namespace WebApp.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebApp.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApp.Persistence.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }
        protected override void Seed(WebApp.Persistence.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
            #region

            var s1 = new Station { Id = 1, Address = "Micurinova", Latitude = 45, Longitude = 42, Name = "42", Lines = null, Deleted = false };
            var s2 = new Station { Id = 2, Address = "Maksima Gorkog", Latitude = 45, Longitude = 42, Name = "43", Lines = null, Deleted = false };
            var s3 = new Station { Id = 3, Address = "Brace Ribnikar", Latitude = 45, Longitude = 42, Name = "44", Lines = null, Deleted = false };

            var tt1 = new Timetable { Id = 1, Deleted = false, CityOrIntercity = CityOrIntercity.City, DayOfTheWeek = "Monday", Line = null, Departures = "8,9" };
            var tt2 = new Timetable { Id = 2, Deleted = false, CityOrIntercity = CityOrIntercity.Intercity, DayOfTheWeek = "Tuesday", Line = null, Departures = "8,9" };
            var tt3 = new Timetable { Id = 3, Deleted = false, CityOrIntercity = CityOrIntercity.City, DayOfTheWeek = "Wednesday", Line = null, Departures = "8,9" };

            var l1 = new Line { Id = 1, Deleted = false, LineNumber = 7, Stations = new List<Station> { s1, s2 }, Timetables = new List<Timetable> { tt1 } };
            var l2 = new Line { Id = 2, Deleted = false, LineNumber = 13, Stations = new List<Station> { s1, s3 }, Timetables = new List<Timetable> { tt2 } };


            context.Stations.AddOrUpdate(a => a.Id, s1);
            context.Stations.AddOrUpdate(a => a.Id, s2);
            context.Stations.AddOrUpdate(a => a.Id, s3);

            context.Timetables.AddOrUpdate(a => a.Id, tt1);
            context.Timetables.AddOrUpdate(a => a.Id, tt2);

            context.Lines.AddOrUpdate(a => a.Id, l1);
            context.Lines.AddOrUpdate(a => a.Id, l2);
            #endregion
            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Admin" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "Controller"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Controller" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "AppUser"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "AppUser" };

                manager.Create(role);
            }

            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new UserManager<ApplicationUser>(userStore);

            if (!context.Users.Any(u => u.UserName == "admin@yahoo.com"))
            {
                var user = new ApplicationUser() { Id = "admin", UserName = "admin@yahoo.com", Email = "admin@yahoo.com", PasswordHash = ApplicationUser.HashPassword("Admin123!") };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "Admin");
            }

            if (!context.Users.Any(u => u.UserName == "appu@yahoo.com"))
            {
                var user = new ApplicationUser() { Id = "appu", UserName = "appu@yahoo.com", Email = "appu@yahoo.com", PasswordHash = ApplicationUser.HashPassword("Appu123!") };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "AppUser");
            }

            if (!context.Users.Any(u => u.UserName == "controller@yahoo.com"))
            {
                var user = new ApplicationUser() { Id = "controller", UserName = "controller@yahoo.com", Email = "controller@yahoo.com", PasswordHash = ApplicationUser.HashPassword("Controller123!") };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "Controller");
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.UI;
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

        public void BuyTicketUnregistredUser(string email)
        {
            try
            {
                MailMessage message = new MailMessage();
                SmtpClient smtp = new SmtpClient();
                message.From = new MailAddress("klisanicmario@gmail.com");
                message.To.Add(new MailAddress(email));
                message.Subject = "Hourly ticket information";
                message.IsBodyHtml = false; //to make message body as html  
                message.Body = String.Format("Hi {0},\n Thanks for purchasing our hourly ticket. This email is the receipt for your purchase.\n This ticket is valid until: {1}", email, DateTime.Now.AddHours(1));
                smtp.Port = 587;
                smtp.Host = "smtp.gmail.com"; //for gmail host  
                smtp.EnableSsl = true;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new NetworkCredential("EMAIL", "PASSWORD");
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Send(message);
            }
            catch (Exception e)
            {
                var a = e;
            }
        }

        //public Ticket BuyTicketVerifiedUser(double price, int pricelistItemId, string userType, TicketType ticketType)
        //{
        //    throw new NotImplementedException();
        //}
    }
}

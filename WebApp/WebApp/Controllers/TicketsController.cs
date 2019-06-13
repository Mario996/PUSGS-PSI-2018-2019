using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.DTOs;
using WebApp.Models;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    [RoutePrefix("api/tickets")]
    public class TicketsController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;

        public TicketsController(IUnitOfWork iUnitOfWork)
        {
            unitOfWork = iUnitOfWork;
        }

        [HttpGet]
        // GET api/tickets
        public IEnumerable<Ticket> GetAllTickets()
        {
            return unitOfWork.Tickets.GetAll().Where(x => x.Deleted == false);
        }

        [HttpGet]
        // GET api/tickets/5
        public HttpResponseMessage GetTicketById(int id)
        {
            var result = unitOfWork.Tickets.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            if (result == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Ticket with that id number doesn't exist.");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }

        [HttpPost]
        [Route("BuyTicketUnregisteredUser")]
        // POST api/tickets/BuyTicketUnregisteredUser
        public HttpResponseMessage BuyTicketUnregisteredUser([FromBody]EmailDTO email)
        {
            unitOfWork.Tickets.BuyTicketUnregistredUser(email.Email);
            return Request.CreateResponse(HttpStatusCode.OK);
        }


    

        [HttpPut]
        // PUT api/tickets/5
        public HttpResponseMessage UpdateTicket(int id, [FromBody]TicketDTO ticketDTO)
        {
            var ticketToBeUpdated = unitOfWork.Tickets.Get(id);
            //ApplicationUser appU = unitOfWork.ApplicationUsers.GetAll().Where(a => a.Id == ticketDTO.applicationUserId).SingleOrDefault();
            //TicketType tt = unitOfWork.TicketTypes.GetAll().Where(a => a.Id == ticketDTO.ticketTypeId).SingleOrDefault();
            //PriceList pl = unitOfWork.PriceLists.GetAll().Where(a => a.Id == ticketDTO.priceListId).SingleOrDefault();

            ticketToBeUpdated.TimeOfPurchase = ticketDTO.TimeOfPurchase;
            ticketToBeUpdated.ValidUntil = ticketDTO.ValidUntil;
            //newTicket.ApplicationUser = appU;
            //newTicket.ApplicationUserId = ticketDTO.ApplicationUserId;
            //newTicket.TicketType = tt;
            //newTicket.TicketTypeId = ticketDTO.TicketTypeId;
            //newTicket.PriceList = pl;
            //newTicket.PriceListId = ticketDTO.PriceListId;

            if (ticketToBeUpdated != null)
            {
                unitOfWork.Tickets.Update(ticketToBeUpdated);
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, ticketToBeUpdated);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Ticket with that id number doesn't exist.");
            }
        }

 
    }
}

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
    public class TicketTypesController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;

        public TicketTypesController(IUnitOfWork iUnitOfWork)
        {
            unitOfWork = iUnitOfWork;
        }

        [HttpGet]
        // GET api/tickettypes
        public IEnumerable<TicketType> GetAllTicketTypes()
        {
            return unitOfWork.TicketTypes.GetAll().Where(x => x.Deleted == false);
        }

        [HttpGet]
        [Route("GetTicketTypeByTicketName/{ticketname}")]
        // GET api/tickettypes/hourly
        public HttpResponseMessage GetTicketTypeByTicketName(string ticketname)
        {
            var result = unitOfWork.TicketTypes.GetTicketTypeByTicketName(ticketname);

            if (result == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Ticket type with that ticket name doesn't exist.");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }

        [HttpPost]
        // POST api/tickettypes
        public HttpResponseMessage CreateTicketType([FromBody]TicketTypeDTO TicketTypeDTO)
        {
            TicketType newTicketType = new TicketType();

            newTicketType.Price = TicketTypeDTO.Price;
            newTicketType.Name = TicketTypeDTO.Name;
            //foreach (var x in unitOfWork.PriceLists.GetAll())
            //{
            //    foreach (var y in TicketTypeDTO.PriceLists)
            //    {
            //        if (x.Id == y.Id)
            //        {
            //            newTicketType.PriceLists.Add(x);
            //        }
            //    }
            //}
            newTicketType.Tickets = TicketTypeDTO.Tickets;

            unitOfWork.TicketTypes.Add(newTicketType);
            unitOfWork.Complete();

            var message = Request.CreateResponse(HttpStatusCode.Created, newTicketType);

            message.Headers.Location = new Uri(Request.RequestUri + "/" + newTicketType.Id.ToString());

            return message;

        }

        [HttpPut]
        // PUT api/tickettypes/5
        public HttpResponseMessage UpdateTicketType(int id, [FromBody]TicketTypeDTO TicketTypeDTO)
        {
            var TicketTypeToBeUpdated = unitOfWork.TicketTypes.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();
            List<PriceList> listOfPriceLists = new List<PriceList>();
            //foreach (var x in unitOfWork.PriceLists.GetAll())
            //{
            //    foreach (var y in TicketTypeDTO.PriceLists)
            //    {
            //        if (x.Id == y.Id)
            //        {
            //            listOfPriceLists.Add(x);
            //        }
            //    }
            //}
            //TicketTypeToBeUpdated.PriceLists.Clear();
            //TicketTypeToBeUpdated.PriceLists = listOfPriceLists;
            TicketTypeToBeUpdated.Price = TicketTypeDTO.Price;
            TicketTypeToBeUpdated.Name = TicketTypeDTO.Name;

            if (TicketTypeToBeUpdated != null)
            {
                unitOfWork.TicketTypes.Update(TicketTypeToBeUpdated);
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, TicketTypeToBeUpdated);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "TicketType with that id number doesn't exist.");
            }
        }

        [HttpDelete]
        // DELETE api/tickettypes/5
        public HttpResponseMessage DeleteTicketType(int id)
        {
            var TicketTypeToBeDeleted = unitOfWork.TicketTypes.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            if (TicketTypeToBeDeleted != null)
            {
                TicketTypeToBeDeleted.Deleted = true;
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, id);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "TicketType with that id number doesn't exist.");
            }
        }
    }
}

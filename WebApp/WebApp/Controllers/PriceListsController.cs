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
    public class PriceListsController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;

        public PriceListsController(IUnitOfWork iUnitOfWork)
        {
            this.unitOfWork = iUnitOfWork;
        }

        [HttpGet]
        // GET api/pricelists
        public IEnumerable<PriceList> GetAllPriceLists()
        {
            return unitOfWork.PriceLists.Include("TicketTypes").Where(x => x.Deleted == false);
        }

        [HttpGet]
        // GET api/pricelists/5
        public HttpResponseMessage GetPriceListById(int id)
        {
            var result = unitOfWork.PriceLists.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            if (result == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "PriceList with that id number doesn't exist.");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }

        [HttpPost]
        // POST api/pricelists
        public HttpResponseMessage CreatePriceList([FromBody]PriceListDTO priceListDTO)
        {
            PriceList newPriceList = new PriceList();

            newPriceList.StartDate = priceListDTO.StartDate;
            newPriceList.EndDate = priceListDTO.EndDate;
            newPriceList.TicketTypes = priceListDTO.TicketTypes;
            newPriceList.Tickets = priceListDTO.Tickets;


            unitOfWork.PriceLists.Add(newPriceList);
            unitOfWork.Complete();

            var message = Request.CreateResponse(HttpStatusCode.Created, newPriceList);

            message.Headers.Location = new Uri(Request.RequestUri + "/" + newPriceList.Id.ToString());

            return message;

        }

        [HttpPut]
        // PUT api/pricelists/5
        public HttpResponseMessage UpdatePriceList(int id, [FromBody]PriceListDTO priceListDTO)
        {
            var priceListToBeUpdated = unitOfWork.PriceLists.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            priceListToBeUpdated.TicketTypes[0].Price = priceListDTO.TicketTypes[0].Price;
            priceListToBeUpdated.TicketTypes[1].Price = priceListDTO.TicketTypes[1].Price;
            priceListToBeUpdated.TicketTypes[2].Price = priceListDTO.TicketTypes[2].Price;
            priceListToBeUpdated.TicketTypes[3].Price = priceListDTO.TicketTypes[3].Price;
            priceListToBeUpdated.StartDate = priceListDTO.StartDate;
            priceListToBeUpdated.EndDate = priceListDTO.EndDate;

            if (priceListToBeUpdated != null)
            {
                unitOfWork.PriceLists.Update(priceListToBeUpdated);
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, priceListToBeUpdated);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "PriceList with that id number doesn't exist.");
            }
        }

        [HttpDelete]
        // DELETE api/pricelists/5
        public HttpResponseMessage DeletePriceList(int id)
        {
            var priceListToBeDeleted = unitOfWork.PriceLists.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            if (priceListToBeDeleted != null)
            {
                priceListToBeDeleted.Deleted = true;
                priceListToBeDeleted.TicketTypes[0].Deleted = true;
                priceListToBeDeleted.TicketTypes[1].Deleted = true;
                priceListToBeDeleted.TicketTypes[2].Deleted = true;
                priceListToBeDeleted.TicketTypes[3].Deleted = true;
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, id);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "PriceList with that id number doesn't exist.");
            }
        }

    }
}

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
        // GET api/priceLists
        public IEnumerable<PriceList> GetAllPriceLists()
        {
            return unitOfWork.PriceLists.GetAll().Where(x => x.Deleted == false);
        }

        [HttpGet]
        // GET api/priceLists/5
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
        // POST api/priceLists
        public HttpResponseMessage CreatePriceList([FromBody]PriceListDTO priceListDTO)
        {
            PriceList newPriceList = new PriceList();

            newPriceList.StartDate = priceListDTO.StartDate;
            newPriceList.EndDate = priceListDTO.EndDate;
            //foreach (var x in unitOfWork.TicketTypes.GetAll())
            //{
            //    foreach (var y in priceListDTO.TicketTypes)
            //    {
            //        if (x.Id == y.Id)
            //        {
            //            newPriceList.TicketTypes.Add(x);
            //        }
            //    }
            //}
            //newPriceList.Tickets = priceListDTO.Tickets;


            unitOfWork.PriceLists.Add(newPriceList);
            unitOfWork.Complete();

            var message = Request.CreateResponse(HttpStatusCode.Created, newPriceList);

            message.Headers.Location = new Uri(Request.RequestUri + "/" + newPriceList.Id.ToString());

            return message;

        }

        [HttpPut]
        // PUT api/priceLists/5
        public HttpResponseMessage UpdatePriceList(int id, [FromBody]PriceListDTO priceListDTO)
        {
            var priceListToBeUpdated = unitOfWork.PriceLists.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();
            //List<TicketType> listOfTicketTypes = new List<TicketType>();
            //foreach (var x in unitOfWork.TicketTypes.GetAll())
            //{
            //    foreach (var y in priceListDTO.TicketTypes)
            //    {
            //        if (x.Id == y.Id)
            //        {
            //            listOfTicketTypes.Add(x);
            //        }
            //    }
            //}
            //priceListToBeUpdated.TicketTypes.Clear();
            //priceListToBeUpdated.TicketTypes = listOfTicketTypes;
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
        // DELETE api/priceLists/5
        public HttpResponseMessage DeletePriceList(int id)
        {
            var priceListToBeDeleted = unitOfWork.PriceLists.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            if (priceListToBeDeleted != null)
            {
                priceListToBeDeleted.Deleted = true;
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

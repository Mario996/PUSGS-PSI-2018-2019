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
    public class StationsController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;

        public StationsController(IUnitOfWork iUnitOfWork)
        {
            unitOfWork = iUnitOfWork;
        }

        [HttpGet]
        // GET api/stations
        public IEnumerable<Station> GetAllStations()
        {
            return unitOfWork.Stations.GetAll().Where(x => x.Deleted == false);
        }

        [HttpGet]
        // GET api/stations/5
        public HttpResponseMessage GetStationById(int id)
        {
            var result = unitOfWork.Stations.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            if (result == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Station with that id number doesn't exist.");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }

        [HttpPost]
        // POST api/stations
        public HttpResponseMessage CreateStation([FromBody]StationDTO stationDTO)
        {
            Station newStation = new Station();
            newStation.Address = stationDTO.Address;
            newStation.Name = stationDTO.Name;
            newStation.Latitude = stationDTO.Latitude;
            newStation.Longitude = stationDTO.Longitude;

            unitOfWork.Stations.Add(newStation);
            unitOfWork.Complete();

            var message = Request.CreateResponse(HttpStatusCode.Created, newStation);

            message.Headers.Location = new Uri(Request.RequestUri + "/" + newStation.Id.ToString());

            return message;

        }

        [HttpPut]
        // PUT api/stations/5
        public HttpResponseMessage UpdateStation(int id, [FromBody]StationDTO stationDTO)
        {
            var stationToBeUpdated = unitOfWork.Stations.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            if (stationToBeUpdated != null)
            {
                stationToBeUpdated.Update(stationDTO);
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, stationToBeUpdated);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Station with that id number doesn't exist.");
            }
        }

        [HttpDelete]
        // DELETE api/stations/5
        public HttpResponseMessage DeleteStation(int id)
        {
            var stationToBeDeleted = unitOfWork.Stations.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            if (stationToBeDeleted != null)
            {
                stationToBeDeleted.Deleted = true;
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, id);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Station with that id number doesn't exist.");
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.DTOs;
using WebApp.Models;
using System.Data.Entity;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    public class TimetablesController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;

        public TimetablesController(IUnitOfWork iUnitOfWork)
        {
            unitOfWork = iUnitOfWork;
        }

        [HttpGet]
        // GET api/timetables
        public IEnumerable<Timetable> GetAllTimetables()
        {
            return unitOfWork.Timetables.GetAll().Where(x => x.Deleted == false);
        }

        [HttpGet]
        // GET api/timetables/5
        public HttpResponseMessage GetTimetableById(int id)
        {
            var result = unitOfWork.Timetables.GetAll().Where(x => x.Id == id && x.Deleted == false).SingleOrDefault();

            if (result == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Timetable with that id number doesn't exist.");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }

        [HttpPost]
        // POST api/timetables
        public HttpResponseMessage CreateTimetable([FromBody]TimetableDTO timetableDTO)
        {
            Timetable newTimetable = new Timetable();
            Line l = unitOfWork.Lines.GetAll().Where(a => a.Id == timetableDTO.LineId).SingleOrDefault();

            newTimetable.CityOrIntercity = timetableDTO.CityOrIntercity;
            newTimetable.DayOfTheWeek = timetableDTO.DayOfTheWeek;
            newTimetable.Departures = timetableDTO.Departures;
            newTimetable.Line = l;
            newTimetable.LineId = l.Id;

            unitOfWork.Timetables.Add(newTimetable);
            unitOfWork.Complete();

            var message = Request.CreateResponse(HttpStatusCode.Created, newTimetable);

            message.Headers.Location = new Uri(Request.RequestUri + "/" + newTimetable.Id.ToString());

            return message;

        }

        [HttpPut]
        // PUT api/timetables/5
        public HttpResponseMessage UpdateTimetable(int id, [FromBody]TimetableDTO timetableDTO)
        {
            var timetableToBeUpdated = unitOfWork.Timetables.Get(id);
            Line l = unitOfWork.Lines.GetAll().Where(x => x.Id == timetableDTO.LineId).SingleOrDefault();
            timetableToBeUpdated.CityOrIntercity = timetableDTO.CityOrIntercity;
            timetableToBeUpdated.DayOfTheWeek = timetableDTO.DayOfTheWeek;
            timetableToBeUpdated.Departures = timetableDTO.Departures;
            timetableToBeUpdated.Line = l;
            timetableToBeUpdated.LineId = timetableDTO.LineId;

            if (timetableToBeUpdated != null)
            {
                unitOfWork.Timetables.Update(timetableToBeUpdated);
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, timetableToBeUpdated);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Timetable with that id number doesn't exist.");
            }
        }

        [HttpDelete]
        // DELETE api/Timetables/5
        public HttpResponseMessage DeleteTimetable(int id)
        {
            var timetableToBeDeleted = unitOfWork.Timetables.Get(id);
            Line l = unitOfWork.Lines.GetAll().Where(x => x.Id == timetableToBeDeleted.LineId).SingleOrDefault();
            timetableToBeDeleted.Line = l;
            if (timetableToBeDeleted != null)
            {
                timetableToBeDeleted.Deleted = true;
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, id);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Timetable with that id number doesn't exist.");
            }
        }
    }
}

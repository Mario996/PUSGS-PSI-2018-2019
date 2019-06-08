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
    public class LinesController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;

        public LinesController(IUnitOfWork iUnitOfWork)
        {
            this.unitOfWork = iUnitOfWork;
        }

        [HttpGet]
        // GET api/lines
        public IEnumerable<Line> GetAllLines()
        {
            var query = unitOfWork.Lines.GetAll()
                .Where(l => l.Deleted == false);
            return query;
        }

        [HttpGet]
        // GET api/lines/5
        public HttpResponseMessage GetLineById(int id)
        {
            var result = unitOfWork.Lines.Get(id);

            if (result == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Line with that id number doesn't exist.");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }

        [HttpPost]
        // POST api/lines
        public HttpResponseMessage CreateLine([FromBody]LineDTO lineDTO)
        {
            Line newLine = new Line();
            try { 
            newLine.LineNumber = lineDTO.LineNumber;
            foreach (var x in unitOfWork.Stations.GetAll())
            {
                foreach (var y in lineDTO.Stations)
                {
                    if (x.Id == y.Id)
                    {
                        newLine.Stations.Add(x);
                    }
                }
            }
            newLine.Timetables = lineDTO.Timetables;

            unitOfWork.Lines.Add(newLine);
            unitOfWork.Complete();
            }
            catch(Exception e)
            {
                var x = e;
            }
            var message = Request.CreateResponse(HttpStatusCode.Created, newLine);

            message.Headers.Location = new Uri(Request.RequestUri + "/" + newLine.Id.ToString());

            return message;

        }

        [HttpPut]
        // PUT api/lines/5
        public HttpResponseMessage UpdateLine(int id, [FromBody]LineDTO lineDTO)
        {
            var lineToBeUpdated = unitOfWork.Lines.Get(id);
            List<Station> l = new List<Station>();
            foreach (var x in unitOfWork.Stations.GetAll())
            {
                foreach (var y in lineDTO.Stations)
                {
                    if (x.Id == y.Id)
                    {
                        l.Add(x);
                    }
                }
            }
            lineToBeUpdated.Stations.Clear();
            lineToBeUpdated.Stations = l;
            if (lineToBeUpdated != null)
            {
                unitOfWork.Lines.Update(lineToBeUpdated);
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, lineToBeUpdated);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Line with that id number doesn't exist.");
            }
        }

        [HttpDelete]
        // DELETE api/lines/5
        public HttpResponseMessage DeleteLine(int id)
        {
            var lineToBeDeleted = unitOfWork.Lines.Get(id);

            if (lineToBeDeleted != null)
            {
                lineToBeDeleted.Deleted = true;
                unitOfWork.Complete();

                return Request.CreateResponse(HttpStatusCode.OK, id);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Line with that id number doesn't exist.");
            }
        }
    }
}

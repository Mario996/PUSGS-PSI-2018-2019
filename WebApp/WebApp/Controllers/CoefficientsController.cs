using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.Models;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    public class CoefficientsController : ApiController
    {
        private readonly IUnitOfWork unitOfWork;

        public CoefficientsController(IUnitOfWork iUnitOfWork)
        {
            unitOfWork = iUnitOfWork;
        }

        [HttpGet]
        // GET api/coefficients
        public IEnumerable<Coefficient> GetAllCoefficients()
        {
            return unitOfWork.Coefficients.GetAll().Where(x => x.Deleted == false);
        }

        [HttpGet]
        [Route("GetCoefficientByUserType/{usertype}")]
        // GET api/coefficients/5
        public HttpResponseMessage GetCoefficientByUserType(string usertype)
        {
            var result = unitOfWork.Coefficients.GetCoefficientByUserType(usertype);

            if (result == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Coefficient with that user type doesn't exist.");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, result);
            }
        }
    }
}

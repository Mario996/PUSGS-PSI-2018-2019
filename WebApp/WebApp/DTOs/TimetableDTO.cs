using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.DTOs
{
    public class TimetableDTO
    {
        [Required]
        public CityOrIntercity CityOrIntercity { get; set; }
        [Required]
        public string DayOfTheWeek { get; set; }
        [Required]
        public string Departures { get; set; }
    }
}
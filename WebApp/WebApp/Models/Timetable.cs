using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebApp.DTOs;

namespace WebApp.Models
{
    public enum CityOrIntercity { City, Intercity };

    public class Timetable
    {
        public int Id { get; set; }
        [Required]
        public CityOrIntercity CityOrIntercity { get; set; }
        public Line Line { get; set; } = new Line();
        public int LineId { get; set; }
        [Required]
        public string DayOfTheWeek { get; set; }
        [Required]
        public string Departures { get; set; }
        public bool Deleted { get; set; } = false;

        public Timetable()
        {

        }

        public void Update(TimetableDTO newValue)
        {
            CityOrIntercity = newValue.CityOrIntercity;
            Line = newValue.Line;
            LineId = newValue.LineId;
            Departures = newValue.Departures;
            DayOfTheWeek = newValue.DayOfTheWeek;
        }
    }
}
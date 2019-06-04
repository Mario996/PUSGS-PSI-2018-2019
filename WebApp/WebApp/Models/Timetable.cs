using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public enum CityOrIntercity { City, Intercity };

    public class Timetable
    {
        public int Id { get; set; }
        public CityOrIntercity CityOrIntercity { get; set; }
        public Line Line { get; set; } = new Line();
        public int LineId { get; set; }
        public string DayOfTheWeek { get; set; }
        public string Departures { get; set; }
        public bool Deleted { get; set; } = false;

        public Timetable()
        {

        }

        public void Update(Timetable newValue)
        {
            CityOrIntercity = newValue.CityOrIntercity;
            Departures = newValue.Departures;
            DayOfTheWeek = newValue.DayOfTheWeek;
        }
    }
}
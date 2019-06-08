using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebApp.DTOs;
using WebApp.Models;

namespace WebApp.Models
{
    public class Line
    {
        public int Id { get; set; }
        [Required]
        public int LineNumber { get; set; }
        [JsonIgnore]
        public virtual List<Station> Stations { get; set; } = new List<Station>();
        public List<Timetable> Timetables { get; set; } = new List<Timetable>();
        public bool Deleted { get; set; } = false;

        public Line()
        {

        }

        public void Update(LineDTO newValue, List<Station> stations)
        {
            LineNumber = newValue.LineNumber;
            Stations = stations;
            Timetables = newValue.Timetables;
        }
    }
}
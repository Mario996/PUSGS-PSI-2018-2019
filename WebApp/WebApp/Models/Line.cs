using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Models
{
    public class Line
    {
        public int Id { get; set; }
        [Required]
        public int LineNumber { get; set; }
        public List<Station> Stations { get; set; } = new List<Station>();
        public List<Timetable> Timetables { get; set; } = new List<Timetable>();
        public bool Deleted { get; set; } = false;

        public Line()
        {

        }

        public void Update(Line newValue)
        {
            LineNumber = newValue.LineNumber;
        }
    }
}
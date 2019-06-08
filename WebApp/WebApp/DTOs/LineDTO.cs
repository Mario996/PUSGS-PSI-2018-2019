using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.DTOs
{
    public class LineDTO
    {
        [Required]
        public int LineNumber { get; set; }
        public virtual List<Station> Stations { get; set; } = new List<Station>();
        public List<Timetable> Timetables { get; set; } = new List<Timetable>();
    }
}
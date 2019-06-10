using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using WebApp.DTOs;

namespace WebApp.Models
{
    public class Station
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public double Longitude { get; set; }
        [Required]
        public double Latitude { get; set; }
        [JsonIgnore]
        public virtual List<Line> Lines { get; set; } = new List<Line>();
        public bool Deleted { get; set; } = false;

        public Station()
        {

        }

        public void Update(StationDTO newValue)
        {
            Name = newValue.Name;
            Address = newValue.Address;
            Longitude = newValue.Longitude;
            Latitude = newValue.Latitude;
        }
    }
}
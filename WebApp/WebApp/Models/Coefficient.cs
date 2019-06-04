using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Coefficient
    {
        public int Id { get; set; }
        [Required]
        public string UserType { get; set; }
        [Required]
        public double DiscountPercentage { get; set; }
        public List<FinalPrice> FinalPrices { get; set; } = new List<FinalPrice>();
        public bool Deleted { get; set; } = false;

        public Coefficient()
        {

        }

        public void Update(Coefficient newValue)
        {
            DiscountPercentage = newValue.DiscountPercentage;
        }
    }
}
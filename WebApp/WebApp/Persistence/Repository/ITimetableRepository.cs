﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Models;
using WebApp.Persistence.Repository;

namespace WebApp.Persistence
{
    public interface ITimetableRepository : IRepository<Timetable, int>
    {
    }
}

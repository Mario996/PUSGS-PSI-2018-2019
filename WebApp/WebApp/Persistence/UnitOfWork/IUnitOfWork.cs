using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Persistence.Repository;

namespace WebApp.Persistence.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        ILineRepository Lines { get; set; }
        IStationRepository Stations { get; set; }
        ITimetableRepository Timetables { get; set; }
        IUserRepository Users { get; set; }
        ITicketRepository Tickets { get; set; }
        IPriceListRepository PriceLists { get; set; }

        int Complete();
    }
}

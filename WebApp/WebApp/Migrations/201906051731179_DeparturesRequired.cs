namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeparturesRequired : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Timetables", "DayOfTheWeek", c => c.String(nullable: false));
            AlterColumn("dbo.Timetables", "Departures", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Timetables", "Departures", c => c.String());
            AlterColumn("dbo.Timetables", "DayOfTheWeek", c => c.String());
        }
    }
}

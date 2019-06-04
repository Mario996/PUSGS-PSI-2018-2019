namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModelCreated : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Coefficients",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserType = c.String(nullable: false),
                        DiscountPercentage = c.Double(nullable: false),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.FinalPrices",
                c => new
                    {
                        Id = c.Int(nullable: false),
                        PriceStart = c.DateTime(),
                        PriceEnd = c.DateTime(),
                        Deleted = c.Boolean(nullable: false),
                        Coefficient_Id = c.Int(),
                        TicketType_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Coefficients", t => t.Coefficient_Id)
                .ForeignKey("dbo.TicketTypes", t => t.TicketType_Id)
                .ForeignKey("dbo.Tickets", t => t.Id)
                .Index(t => t.Id)
                .Index(t => t.Coefficient_Id)
                .Index(t => t.TicketType_Id);
            
            CreateTable(
                "dbo.Tickets",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        TimeOfPurchase = c.DateTime(),
                        ValidUntil = c.DateTime(),
                        Deleted = c.Boolean(nullable: false),
                        ApplicationUser_Id = c.String(maxLength: 128),
                        TicketType_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUser_Id)
                .ForeignKey("dbo.TicketTypes", t => t.TicketType_Id)
                .Index(t => t.ApplicationUser_Id)
                .Index(t => t.TicketType_Id);
            
            CreateTable(
                "dbo.TicketTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Price = c.Double(nullable: false),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Lines",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        LineNumber = c.Int(nullable: false),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Stations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Address = c.String(nullable: false),
                        Longitude = c.Double(nullable: false),
                        Latitude = c.Double(nullable: false),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Timetables",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CityOrIntercity = c.Int(nullable: false),
                        LineId = c.Int(nullable: false),
                        DayOfTheWeek = c.String(),
                        Departures = c.String(),
                        Deleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Lines", t => t.LineId, cascadeDelete: true)
                .Index(t => t.LineId);
            
            CreateTable(
                "dbo.StationLines",
                c => new
                    {
                        Station_Id = c.Int(nullable: false),
                        Line_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Station_Id, t.Line_Id })
                .ForeignKey("dbo.Stations", t => t.Station_Id, cascadeDelete: true)
                .ForeignKey("dbo.Lines", t => t.Line_Id, cascadeDelete: true)
                .Index(t => t.Station_Id)
                .Index(t => t.Line_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Timetables", "LineId", "dbo.Lines");
            DropForeignKey("dbo.StationLines", "Line_Id", "dbo.Lines");
            DropForeignKey("dbo.StationLines", "Station_Id", "dbo.Stations");
            DropForeignKey("dbo.FinalPrices", "Id", "dbo.Tickets");
            DropForeignKey("dbo.Tickets", "TicketType_Id", "dbo.TicketTypes");
            DropForeignKey("dbo.FinalPrices", "TicketType_Id", "dbo.TicketTypes");
            DropForeignKey("dbo.Tickets", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.FinalPrices", "Coefficient_Id", "dbo.Coefficients");
            DropIndex("dbo.StationLines", new[] { "Line_Id" });
            DropIndex("dbo.StationLines", new[] { "Station_Id" });
            DropIndex("dbo.Timetables", new[] { "LineId" });
            DropIndex("dbo.Tickets", new[] { "TicketType_Id" });
            DropIndex("dbo.Tickets", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.FinalPrices", new[] { "TicketType_Id" });
            DropIndex("dbo.FinalPrices", new[] { "Coefficient_Id" });
            DropIndex("dbo.FinalPrices", new[] { "Id" });
            DropTable("dbo.StationLines");
            DropTable("dbo.Timetables");
            DropTable("dbo.Stations");
            DropTable("dbo.Lines");
            DropTable("dbo.TicketTypes");
            DropTable("dbo.Tickets");
            DropTable("dbo.FinalPrices");
            DropTable("dbo.Coefficients");
        }
    }
}

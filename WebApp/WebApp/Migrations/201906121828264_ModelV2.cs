namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModelV2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.FinalPrices", "Coefficient_Id", "dbo.Coefficients");
            DropForeignKey("dbo.FinalPrices", "TicketType_Id", "dbo.TicketTypes");
            DropForeignKey("dbo.FinalPrices", "Id", "dbo.Tickets");
            DropIndex("dbo.FinalPrices", new[] { "Id" });
            DropIndex("dbo.FinalPrices", new[] { "Coefficient_Id" });
            DropIndex("dbo.FinalPrices", new[] { "TicketType_Id" });
            CreateTable(
                "dbo.PriceLists",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        StartDate = c.String(),
                        EndDate = c.String(),
                        Deleted = c.Boolean(nullable: false),
                        TicketType_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.TicketTypes", t => t.TicketType_Id)
                .Index(t => t.TicketType_Id);
            
            AddColumn("dbo.Tickets", "PriceList_Id", c => c.Int());
            AddColumn("dbo.AspNetUsers", "Coefficient_Id", c => c.Int());
            CreateIndex("dbo.AspNetUsers", "Coefficient_Id");
            CreateIndex("dbo.Tickets", "PriceList_Id");
            AddForeignKey("dbo.AspNetUsers", "Coefficient_Id", "dbo.Coefficients", "Id");
            AddForeignKey("dbo.Tickets", "PriceList_Id", "dbo.PriceLists", "Id");
            DropTable("dbo.FinalPrices");
        }
        
        public override void Down()
        {
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
                .PrimaryKey(t => t.Id);
            
            DropForeignKey("dbo.PriceLists", "TicketType_Id", "dbo.TicketTypes");
            DropForeignKey("dbo.Tickets", "PriceList_Id", "dbo.PriceLists");
            DropForeignKey("dbo.AspNetUsers", "Coefficient_Id", "dbo.Coefficients");
            DropIndex("dbo.PriceLists", new[] { "TicketType_Id" });
            DropIndex("dbo.Tickets", new[] { "PriceList_Id" });
            DropIndex("dbo.AspNetUsers", new[] { "Coefficient_Id" });
            DropColumn("dbo.AspNetUsers", "Coefficient_Id");
            DropColumn("dbo.Tickets", "PriceList_Id");
            DropTable("dbo.PriceLists");
            CreateIndex("dbo.FinalPrices", "TicketType_Id");
            CreateIndex("dbo.FinalPrices", "Coefficient_Id");
            CreateIndex("dbo.FinalPrices", "Id");
            AddForeignKey("dbo.FinalPrices", "Id", "dbo.Tickets", "Id");
            AddForeignKey("dbo.FinalPrices", "TicketType_Id", "dbo.TicketTypes", "Id");
            AddForeignKey("dbo.FinalPrices", "Coefficient_Id", "dbo.Coefficients", "Id");
        }
    }
}

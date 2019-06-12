namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CoefficientIdNullable : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Tickets", "PriceList_Id", "dbo.PriceLists");
            DropForeignKey("dbo.Tickets", "TicketType_Id", "dbo.TicketTypes");
            DropIndex("dbo.Tickets", new[] { "TicketType_Id" });
            DropIndex("dbo.Tickets", new[] { "PriceList_Id" });
            RenameColumn(table: "dbo.AspNetUsers", name: "Coefficient_Id", newName: "CoefficientId");
            RenameColumn(table: "dbo.Tickets", name: "ApplicationUser_Id", newName: "ApplicationUserId");
            RenameColumn(table: "dbo.Tickets", name: "PriceList_Id", newName: "PriceListId");
            RenameColumn(table: "dbo.Tickets", name: "TicketType_Id", newName: "TicketTypeId");
            RenameIndex(table: "dbo.AspNetUsers", name: "IX_Coefficient_Id", newName: "IX_CoefficientId");
            RenameIndex(table: "dbo.Tickets", name: "IX_ApplicationUser_Id", newName: "IX_ApplicationUserId");
            AlterColumn("dbo.Tickets", "TicketTypeId", c => c.Int(nullable: false));
            AlterColumn("dbo.Tickets", "PriceListId", c => c.Int(nullable: false));
            CreateIndex("dbo.Tickets", "TicketTypeId");
            CreateIndex("dbo.Tickets", "PriceListId");
            AddForeignKey("dbo.Tickets", "PriceListId", "dbo.PriceLists", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Tickets", "TicketTypeId", "dbo.TicketTypes", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Tickets", "TicketTypeId", "dbo.TicketTypes");
            DropForeignKey("dbo.Tickets", "PriceListId", "dbo.PriceLists");
            DropIndex("dbo.Tickets", new[] { "PriceListId" });
            DropIndex("dbo.Tickets", new[] { "TicketTypeId" });
            AlterColumn("dbo.Tickets", "PriceListId", c => c.Int());
            AlterColumn("dbo.Tickets", "TicketTypeId", c => c.Int());
            RenameIndex(table: "dbo.Tickets", name: "IX_ApplicationUserId", newName: "IX_ApplicationUser_Id");
            RenameIndex(table: "dbo.AspNetUsers", name: "IX_CoefficientId", newName: "IX_Coefficient_Id");
            RenameColumn(table: "dbo.Tickets", name: "TicketTypeId", newName: "TicketType_Id");
            RenameColumn(table: "dbo.Tickets", name: "PriceListId", newName: "PriceList_Id");
            RenameColumn(table: "dbo.Tickets", name: "ApplicationUserId", newName: "ApplicationUser_Id");
            RenameColumn(table: "dbo.AspNetUsers", name: "CoefficientId", newName: "Coefficient_Id");
            CreateIndex("dbo.Tickets", "PriceList_Id");
            CreateIndex("dbo.Tickets", "TicketType_Id");
            AddForeignKey("dbo.Tickets", "TicketType_Id", "dbo.TicketTypes", "Id");
            AddForeignKey("dbo.Tickets", "PriceList_Id", "dbo.PriceLists", "Id");
        }
    }
}

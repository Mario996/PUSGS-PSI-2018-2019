namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TicketTypePriceList : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.PriceLists", "TicketType_Id", "dbo.TicketTypes");
            DropIndex("dbo.PriceLists", new[] { "TicketType_Id" });
            CreateTable(
                "dbo.TicketTypePriceLists",
                c => new
                    {
                        TicketType_Id = c.Int(nullable: false),
                        PriceList_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.TicketType_Id, t.PriceList_Id })
                .ForeignKey("dbo.TicketTypes", t => t.TicketType_Id, cascadeDelete: true)
                .ForeignKey("dbo.PriceLists", t => t.PriceList_Id, cascadeDelete: true)
                .Index(t => t.TicketType_Id)
                .Index(t => t.PriceList_Id);
            
            DropColumn("dbo.PriceLists", "TicketType_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.PriceLists", "TicketType_Id", c => c.Int());
            DropForeignKey("dbo.TicketTypePriceLists", "PriceList_Id", "dbo.PriceLists");
            DropForeignKey("dbo.TicketTypePriceLists", "TicketType_Id", "dbo.TicketTypes");
            DropIndex("dbo.TicketTypePriceLists", new[] { "PriceList_Id" });
            DropIndex("dbo.TicketTypePriceLists", new[] { "TicketType_Id" });
            DropTable("dbo.TicketTypePriceLists");
            CreateIndex("dbo.PriceLists", "TicketType_Id");
            AddForeignKey("dbo.PriceLists", "TicketType_Id", "dbo.TicketTypes", "Id");
        }
    }
}

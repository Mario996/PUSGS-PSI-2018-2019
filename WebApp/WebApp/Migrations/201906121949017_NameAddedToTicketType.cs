namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NameAddedToTicketType : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TicketTypes", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.TicketTypes", "Name");
        }
    }
}

namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DatesToStringTicket : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Tickets", "TimeOfPurchase", c => c.String());
            AlterColumn("dbo.Tickets", "ValidUntil", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Tickets", "ValidUntil", c => c.DateTime());
            AlterColumn("dbo.Tickets", "TimeOfPurchase", c => c.DateTime());
        }
    }
}

namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class userRawImage : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "RawImage", c => c.Binary());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "RawImage");
        }
    }
}

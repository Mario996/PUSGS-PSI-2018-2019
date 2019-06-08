namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DateOfBirthNullable : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "Address", c => c.String());
            AlterColumn("dbo.AspNetUsers", "DateOfBirth", c => c.DateTime());
            DropColumn("dbo.AspNetUsers", "Adddress");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "Adddress", c => c.String());
            AlterColumn("dbo.AspNetUsers", "DateOfBirth", c => c.DateTime(nullable: false));
            DropColumn("dbo.AspNetUsers", "Address");
        }
    }
}

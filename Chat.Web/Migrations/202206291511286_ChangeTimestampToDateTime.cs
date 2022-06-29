namespace Chat.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeTimestampToDateTime : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Messages", "Timestamp", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Messages", "Timestamp", c => c.String());
        }
    }
}

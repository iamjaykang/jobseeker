using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class AddAppUserToJobEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "Jobs",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_AppUserId",
                table: "Jobs",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_AspNetUsers_AppUserId",
                table: "Jobs",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_AspNetUsers_AppUserId",
                table: "Jobs");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_AppUserId",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Jobs");
        }
    }
}

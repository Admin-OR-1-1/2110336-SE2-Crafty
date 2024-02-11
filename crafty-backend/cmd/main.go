package main

import (
	userAPI "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/app/user-api/route"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/pkg/infrastructure"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load(".local.env")
	infra := infrastructure.NewInfrastructure()
	repos := repository.NewRepositories(infra)
	app := fiber.New()

	usrApi := userAPI.SetupUserAPI(repos)

	usrApi.SetupRoute(app)
	app.Listen(":8000")

}

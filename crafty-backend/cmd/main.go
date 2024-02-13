package main

import (
	_ "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/docs"
	userAPI "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/app/user-api/route"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/pkg/infrastructure"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"github.com/swaggo/fiber-swagger" 
)

func main() {
	godotenv.Load(".local.env")
	infra := infrastructure.NewInfrastructure()
	repos := repository.NewRepositories(infra)
	app := fiber.New()

	v1 := app.Group("/api/v1")

	usrApi := userAPI.SetupUserAPI(repos)
	usrApi.SetupRoute(v1)
	v1.Get("/docs/*", fiberSwagger.WrapHandler)
	app.Listen(":8000")

}

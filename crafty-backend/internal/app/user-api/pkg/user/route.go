package userAPI

import (
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository"
	"github.com/gofiber/fiber/v2"
)

type UserRouter struct {
	r *repository.Repositories
}

func NewUserRouter(repos *repository.Repositories) *UserRouter {
	return &UserRouter{r: repos}
}

func (api *UserRouter) SetupRoute(ro fiber.Router) {
	handler := NewUserHandler(api.r)
	ro.Get("/", handler.GetUserInfo)
	ro.Put("/", handler.UpdateUser)
	ro.Delete("/", handler.DeleteUser)
}

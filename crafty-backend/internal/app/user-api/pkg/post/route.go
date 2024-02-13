package postAPI

import (
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository"
	"github.com/gofiber/fiber/v2"
)

type PostRouter struct {
	r *repository.Repositories
}

func NewPostRouter(repos *repository.Repositories) *PostRouter {
	return &PostRouter{r: repos}
}

func (api *PostRouter) SetupRoute(ro fiber.Router) {
	handler := NewPostHandler(api.r)
	ro.Get("/", handler.GetPostInfo)
	ro.Put("/", handler.UpdatePost)
	ro.Delete("/", handler.DeletePost)
}

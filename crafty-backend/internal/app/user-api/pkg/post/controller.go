package postAPI

import (
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository"
	"github.com/gofiber/fiber/v2"
)

type PostHandler struct {
	repos *repository.Repositories
}

type IPostHandler interface {
	GetPostInfo(*fiber.Ctx) error
	UpdatePost(*fiber.Ctx) error
	DeletePost(*fiber.Ctx) error
}

func NewPostHandler(repository *repository.Repositories) IPostHandler {
	return &PostHandler{repos: repository}
}

// GetUserInfo
// @Description Get User's Info
// @Tags User
// @Security Firebase
// @Accept json
// @Produce json
// @Success 200 {array} GetPostByIDResponse
// @Failure 401 {object} authMiddleware.ErrorResponse "Invalid Token"
// @Failure 403 {object} authMiddleware.ErrorResponse "No Permissions"
// @Failure 500 {string} authMiddleware.ErrorResponse message
// @Router /user [get]
func (h *PostHandler) GetPostInfo(c *fiber.Ctx) error {

	postid := c.Locals("post").(string)

	post, err := h.repos.PostRepository.GetPostById(postid)
	if err != nil {
		return c.Status(404).JSON(GetPostByIDResponse{Error: err})
	}

	return c.Status(200).JSON(GetPostByIDResponse{Post: post})
}

// UpdateUser
// @Description UpdateUser
// @Tags User
// @Security Firebase
// @Accept json
// @Produce json
// @Param UpdateUser body UpdatePostRequest true "UpdateUser"
// @Failure 401 {object} authMiddleware.ErrorResponse "Invalid Token"
// @Failure 403 {object} authMiddleware.ErrorResponse "No Permissions"
// @Success 201 {object} UpdatePostResponse "Update User Success"
// @Failure  500 {object} UpdatePostResponse "Update User Failed"
// @Router /user [put]
func (h *PostHandler) UpdatePost(c *fiber.Ctx) error {
	uid := c.Locals("post").(string)
	req := new(UpdatePostRequest)
	if err := c.BodyParser(req); err != nil {
		return c.Status(400).JSON(UpdatePostResponse{Error: err.Error()})
	}

	err := h.repos.PostRepository.CreatePost(req.Post.ToModel(uid))
	if err != nil {
		return c.Status(400).JSON(UpdatePostResponse{Error: err.Error()})
	}

	return c.Status(201).JSON(UpdatePostResponse{Message: "Post updated successfully"})
}

// DeleteUser
// @Description DeleteUser
// @Tags User
// @Security Firebase
// @Accept json
// @Produce json
// @Failure 401 {object} authMiddleware.ErrorResponse "Invalid Token"
// @Failure 403 {object} authMiddleware.ErrorResponse "No Permissions"
// @Success 201 {object} UpdatePostResponse "Delete User Success"
// @Failure  500 {object} UpdatePostResponse "Delete User Failed"
// @Router /user [delete]
func (h *PostHandler) DeletePost(c *fiber.Ctx) error {

	uid := c.Locals("post").(string)

	err := h.repos.PostRepository.DeletePost(uid)
	if err != nil {
		return c.Status(400).JSON(UpdatePostResponse{Error: err.Error()})
	}

	return c.Status(200).JSON(UpdatePostResponse{Message: "Post deleted successfully"})
}

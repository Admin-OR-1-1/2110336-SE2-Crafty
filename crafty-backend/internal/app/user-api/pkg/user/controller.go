package userAPI

import (
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository"
	"github.com/gofiber/fiber/v2"
)

type UserHandler struct {
	repos *repository.Repositories
}

type IUserHandler interface {
	GetUserInfo(*fiber.Ctx) error
	UpdateUser(*fiber.Ctx) error
	DeleteUser(*fiber.Ctx) error
}

func NewUserHandler(repository *repository.Repositories) IUserHandler {
	return &UserHandler{repos: repository}
}

// GetUserInfo
// @Description Get User's Info
// @Tags User
// @Security Firebase
// @Accept json
// @Produce json
// @Success 200 {array} GetUserByIDResponse
// @Failure 401 {object} authMiddleware.ErrorResponse "Invalid Token"
// @Failure 403 {object} authMiddleware.ErrorResponse "No Permissions"
// @Failure 500 {string} authMiddleware.ErrorResponse message
// @Router /user [get]
func (h *UserHandler) GetUserInfo(c *fiber.Ctx) error {

	userid := c.Locals("user").(string)

	user, err := h.repos.UserRepository.GetUserById(userid)
	if err != nil {
		return c.Status(404).JSON(GetUserByIDResponse{Error: err})
	}

	return c.Status(200).JSON(GetUserByIDResponse{User: user})
}

// UpdateUser
// @Description UpdateUser
// @Tags User
// @Security Firebase
// @Accept json
// @Produce json
// @Param UpdateUser body UpdateUserRequest true "UpdateUser"
// @Failure 401 {object} authMiddleware.ErrorResponse "Invalid Token"
// @Failure 403 {object} authMiddleware.ErrorResponse "No Permissions"
// @Success 201 {object} UpdateUserResponse "Update User Success"
// @Failure  500 {object} UpdateUserResponse "Update User Failed"
// @Router /user [put]
func (h *UserHandler) UpdateUser(c *fiber.Ctx) error {
	uid := c.Locals("user").(string)
	req := new(UpdateUserRequest)
	if err := c.BodyParser(req); err != nil {
		return c.Status(400).JSON(UpdateUserResponse{Error: err.Error()})
	}

	err := h.repos.UserRepository.InsertUser(req.User.ToModel(uid))
	if err != nil {
		return c.Status(400).JSON(UpdateUserResponse{Error: err.Error()})
	}

	return c.Status(201).JSON(UpdateUserResponse{Message: "User updated successfully"})
}

// DeleteUser
// @Description DeleteUser
// @Tags User
// @Security Firebase
// @Accept json
// @Produce json
// @Failure 401 {object} authMiddleware.ErrorResponse "Invalid Token"
// @Failure 403 {object} authMiddleware.ErrorResponse "No Permissions"
// @Success 201 {object} UpdateUserResponse "Delete User Success"
// @Failure  500 {object} UpdateUserResponse "Delete User Failed"
// @Router /user [delete]
func (h *UserHandler) DeleteUser(c *fiber.Ctx) error {

	uid := c.Locals("user").(string)

	err := h.repos.UserRepository.DeleteUser(uid)
	if err != nil {
		return c.Status(400).JSON(UpdateUserResponse{Error: err.Error()})
	}

	return c.Status(200).JSON(UpdateUserResponse{Message: "User deleted successfully"})
}

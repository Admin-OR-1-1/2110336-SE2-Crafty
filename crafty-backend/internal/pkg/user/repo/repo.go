package userRepo

import (
	user "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user"
)

type IUserRepo interface {
	CreateUser(User user.TUser) error
	DeleteUser(UID string) error
	GetUserById(UID string) (user.TUser, error)
	UpdateUser(User user.TUser) error
}

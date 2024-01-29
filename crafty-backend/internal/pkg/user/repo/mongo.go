package user_repo

import (
	user "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user"
)

type IUserRepo interface {
	CreateUser(User user.TUser) (error)
	GetUserById(UID string) (user.TUser, error)
	EditUserInfo(User user.TUser) (error)
	DeleteUser(UID string) (error)
}


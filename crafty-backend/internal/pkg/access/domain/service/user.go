package access_service

import (
	access_model "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/access/domain/model"
)

type UserService interface {
	Create(user access_model.User) error
  	//
	// some methods
	//
}
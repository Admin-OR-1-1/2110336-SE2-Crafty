package mocks

import (
	model "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/model"
)

type IUserRepo interface {
	InsertUser(User model.TUser) error
	UpdateUser(User model.TUser) error
	DeleteUser(ID string) error
	GetUserById(ID string) (model.TUser, error)
}

type UserRepository struct{}

func (r *UserRepository) InsertUser(User model.TUser) error {
	// Implement mock behavior here
	return nil // Return nil for now
}

func (r *UserRepository) UpdateUser(User model.TUser) error {
	// Implement mock behavior here
	return nil // Return nil for now
}

func (r *UserRepository) DeleteUser(UID string) error {
	// Implement mock behavior here
	return nil // Return nil for now
}

func (r *UserRepository) GetUserById(UID string) (model.TUser, error) {
	if UID == "123456" {
		return model.TUser{UID: "123456",
			Username:     "Korawut the Ming",
			Phone_number: "098xxxxxxx",
			PictureUrl:   "jiaojg;riogj"}, nil
	}
	return model.TUser{}, nil
}

func NewUserRepository() IUserRepo {
	return &UserRepository{}
}

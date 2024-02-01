package user

import (
	"fmt"

	userRepo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user/repo"
)

// type IUser interface {
// 	CreateUser(User TUser) error
// 	GetUserById(UID string) (TUser, error)
// 	UpdateUser(User TUser) error
// 	DeleteUser(UID string) error
// }

func IsValidUser(User userRepo.TUser) bool {
	if User.UID == "" {
		return false
	}
	if User.Username == "" {
		return false
	}
	if User.Phone_number == "" {
		return false
	}
	if User.Address.Address_1 == "" {
		return false
	}
	if User.Address.Street == "" {
		return false
	}
	if User.Address.Tambon == "" {
		return false
	}
	if User.Address.Amphoe == "" {
		return false
	}
	if User.Address.Province == "" {
		return false
	}
	if User.Address.Postal_code == "" {
		return false
	}
	if User.PictureUrl == "" {
		return false
	}
	return true
}

func CreateUser(User userRepo.TUser) error {
	userInstance, _ := userRepo.CreateUserInstance()
	if IsValidUser(User) {
		userInstance.CreateUser(User)
		return nil
	} else {
		return fmt.Errorf("Invalid User")
	}
}

func GetUserById(UID string) (userRepo.TUser, error) {
	user, err := userRepo.CreateUserInstance()
	if err != nil {
		return userRepo.TUser{}, err
	}
	if err := user.GetUserById(UID); err != nil {
		return userRepo.TUser{}, err
	}
	return user.ToUser(), err
}

// not yet written
func UpdateUser(User userRepo.TUser) error {
	return nil
}

func DeleteUser(UID string) error {
	return nil
}

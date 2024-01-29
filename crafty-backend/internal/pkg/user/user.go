package user

import "google.golang.org/genproto/googleapis/type/phone_number"

type TAddress struct {
	Address_1   string
	Street      string
	Tambon      string
	Amphoe      string
	Province    string
	Postal_code string
}

type TUser struct {
	UID          string
	Username     string
	Phone_number phone_number.PhoneNumber
	Address      TAddress
	PictureUrl   string
}

type IUser interface {
	CreateUser(User TUser) error
	GetUserById(UID string) (TUser, error)
	UpdateUser(User TUser) error
	DeleteUser(UID string) error
}

package user

import "google.golang.org/genproto/googleapis/type/phone_number"

type Address struct {
	Address_1   string
	Street      string
	Tambon      string
	Amphoe      string
	Province    string
	Postal_code string
}

type User struct {
	UID          string
	Username     string
	Phone_number phone_number.PhoneNumber
	Address      Address
}

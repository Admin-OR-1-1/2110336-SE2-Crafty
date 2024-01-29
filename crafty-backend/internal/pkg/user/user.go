package user

import "google.golang.org/genproto/googleapis/type/phone_number"

type Address struct {

}

type User struct {
  UID string
  Username string
  Phone_number phone_number.PhoneNumber
  Address Address
  
 }
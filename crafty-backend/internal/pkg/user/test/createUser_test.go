package user_test

import (
	"fmt"
	"testing"

	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user"
	userRepo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user/repo"
	"github.com/go-playground/assert"
)

func ValidCreatedUser() (string, userRepo.TUser) {
	UID := "UidThatIsValid"
	ValidAddress := userRepo.TAddress{
		Address_1:   "Address_1ThatIsValid",
		Street:      "StreetThatIsValid",
		Tambon:      "TambonThatIsValid",
		Amphoe:      "AmphoeThatIsValid",
		Province:    "ProvinceThatIsValid",
		Postal_code: "Postal_codeThatIsValid",
	}
	ValidUser := userRepo.TUser{
		UID:          UID,
		Username:     "UsernameThatIsValid",
		Phone_number: "PhoneNumberThatIsValid",
		Address:      ValidAddress,
		PictureUrl:   "PictureUrlThatIsValid",
	}
	return UID, ValidUser
}

func InvalidCraetedUser() (string, userRepo.TUser) {
	UID := "UidThatIsInvalid"
	InvalidAddress := userRepo.TAddress{
		Address_1:   "Address_1ThatIsInvalid",
		Street:      "StreetThatIsInvalid",
		Tambon:      "TambonThatIsInvalid",
		Amphoe:      "AmphoeThatIsInvalid",
		Province:    "ProvinceThatIsInvalid",
		Postal_code: "Postal_codeThatIsInvalid",
	}
	InvalidUser := userRepo.TUser{
		UID:          UID,
		Username:     "UsernameThatIsInvalid",
		Phone_number: "PhoneNumberThatIsInvalid",
		Address:      InvalidAddress,
		PictureUrl:   "PictureUrlThatIsInvalid",
	}
	return UID, InvalidUser
}

func UsedNumberUser() (string, userRepo.TUser) {
	UID := "UidThatIsValid"
	ValidAddress := userRepo.TAddress{
		Address_1:   "Address_1ThatIsValid",
		Street:      "StreetThatIsValid",
		Tambon:      "TambonThatIsValid",
		Amphoe:      "AmphoeThatIsValid",
		Province:    "ProvinceThatIsValid",
		Postal_code: "Postal_codeThatIsValid",
	}
	UsedNumberUser := userRepo.TUser{
		UID:          UID,
		Username:     "UsernameThatIsValid",
		Phone_number: "PhoneNumberThatIsUsed",
		Address:      ValidAddress,
		PictureUrl:   "PictureUrlThatIsValid",
	}
	return UID, UsedNumberUser
}

func TestCreateUser(t *testing.T) {
	//case success
	ValidCreateUID, ValidCreateUser := ValidCreatedUser()
	err1 := user.CreateUser(ValidCreateUser)
	UserFetched1, _ := user.GetUserById(ValidCreateUID)
	assert.Equal(t, nil, err1)
	assert.Equal(t, ValidCreateUID, UserFetched1)

	//case phone number already use
	_, UsedNumberUser := UsedNumberUser()
	err2 := user.CreateUser(UsedNumberUser)
	assert.Equal(t, fmt.Errorf("Phone Number is already used"), err2)

	//case invalid
	_, ValidCreateUser3 := InvalidCraetedUser()
	err3 := user.CreateUser(ValidCreateUser3)
	//UserFetched2, _ := user.GetUserById(ValidCreateUID2)
	assert.Equal(t, fmt.Errorf("Invalid Information"), err3)
	//assert.Equal(t, ValidCreateUID, UserFetched2)
}

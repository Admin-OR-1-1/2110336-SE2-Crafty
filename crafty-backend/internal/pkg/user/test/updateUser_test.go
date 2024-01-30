package user_test

//---*IMPORTANT*---//
// Test getUser.go first before testing this file //

import (
	"fmt"
	"testing"

	user "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user"
	userRepo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user/repo"
	"github.com/go-playground/assert"
)

func ValidUpdatedUser() (string, userRepo.TUser) {
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

func InvalidUpdatedUser() (string, userRepo.TUser) {
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

func TestUpdateUser(t *testing.T) {
	UID1, UpdatedUser1 := ValidUpdatedUser()
	err1 := user.UpdateUser(UpdatedUser1)
	UserFetched1, _ := user.GetUserById(UID1)
	assert.Equal(t, nil, err1)
	assert.Equal(t, UpdatedUser1, UserFetched1)

	UID2, UpdatedUser2 := InvalidUpdatedUser()
	UserFetched2Before, _ := user.GetUserById(UID2)
	err2 := user.UpdateUser(UpdatedUser2)
	UserFetched2After, _ := user.GetUserById(UID2)
	assert.Equal(t, fmt.Errorf("Invalid UID"), err2)
	assert.Equal(t, UserFetched2Before, UserFetched2After)
}

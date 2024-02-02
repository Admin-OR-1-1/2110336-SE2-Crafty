package user_test

import (
	"fmt"
	"testing"

	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user"
	userRepo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user/repo"
	"github.com/go-playground/assert"
)

func ValidDeletedUser() (string, userRepo.TUser) {
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

func InvalidDeletedUser() (string, userRepo.TUser) {
	UID := "UidThatIsInvalid"
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

func TestDeleteUser(t *testing.T) {
	//case UID is valid
	DeletedUID, _ := ValidDeletedUser()
	err1 := user.DeleteUser(DeletedUID)
	assert.Equal(t, nil, err1)

	//case UID is invalid
	DeletedUID2, _ := ValidDeletedUser()
	err2 := user.DeleteUser(DeletedUID2)
	assert.Equal(t, fmt.Errorf("UID is invalid"), err2)
}

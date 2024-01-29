package user_test

import (
	"fmt"
	"testing"

	user "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user"
	"github.com/go-playground/assert"
)

func ValidUID() (string, user.TUser) {
	ValidAddress := user.TAddress{
		Address_1:   "Address_1ThatIsValid",
		Street:      "StreetThatIsValid",
		Tambon:      "TambonThatIsValid",
		Amphoe:      "AmphoeThatIsValid",
		Province:    "ProvinceThatIsValid",
		Postal_code: "Postal_codeThatIsValid",
	}
	ValidUser := user.TUser{
		UID:          "UidThatIsValid",
		Username:     "UsernameThatIsValid",
		Phone_number: "PhoneNumberThatIsValid",
		Address:      ValidAddress,
		PictureUrl:   "PictureUrlThatIsValid",
	}
	return "UidThatIsValid", ValidUser
}

func InvalidUID() string {
	return "UidThatIsInvalid"
}

func TestGetUser(t *testing.T) {
	ValidUID, ValidUser := ValidUID()
	User1, Err1 := user.GetUserById(ValidUID)
	assert.Equal(t, ValidUser, User1)
	assert.Equal(t, nil, Err1)

	InvalidUID := InvalidUID()
	User2, Err2 := user.GetUserById(InvalidUID)
	assert.Equal(t, nil, User2)
	assert.Equal(t, fmt.Errorf("Invalid UID"), Err2)
}

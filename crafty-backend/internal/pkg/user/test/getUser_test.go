package user_test

import (
	"fmt"
	"strings"
	"testing"

	user "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user"
	userRepo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user/repo"
	"github.com/go-playground/assert"
)

func ValidUID() (string, userRepo.TUser) {
	ValidAddress := userRepo.TAddress{
		Address_1:   "Address_1ThatIsValid",
		Street:      "StreetThatIsValid",
		Tambon:      "TambonThatIsValid",
		Amphoe:      "AmphoeThatIsValid",
		Province:    "ProvinceThatIsValid",
		Postal_code: "Postal_codeThatIsValid",
	}
	ValidUser := userRepo.TUser{
		UID:          "UidThatIsValid",
		Username:     "UsernameThatIsValid",
		Phone_number: "PhoneNumberThatIsValid",
		Address:      ValidAddress,
		PictureUrl:   "PictureUrlThatIsValid",
	}
	return "UidThatIsValid", ValidUser
}

// Example function from Kongphob not used in this test
func InvalidField(fieldNames []string) error {
	return fmt.Errorf("Invalid field: %s", strings.Join(fieldNames, ", "))
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

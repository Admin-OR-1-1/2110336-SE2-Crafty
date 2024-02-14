package model_test

//---*IMPORTANT*---//
// Test getmodel.go first before testing this file //

import (
	"testing"

	model "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/model"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/service"
	_repositoryMock "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/mocks"

	"github.com/go-playground/assert"
)

func ValidUpdatedUser() (string, model.TUser) {
	UID := "UidThatIsValid"
	ValidAddress := model.TAddress{
		Address_1:   "Address_1ThatIsValid",
		Street:      "StreetThatIsValid",
		Tambon:      "TambonThatIsValid",
		Amphoe:      "AmphoeThatIsValid",
		Province:    "ProvinceThatIsValid",
		Postal_code: "Postal_codeThatIsValid",
	}
	Validmodel := model.TUser{
		UID:          UID,
		Username:     "modelnameThatIsValid",
		Phone_number: "PhoneNumberThatIsValid",
		Address:      ValidAddress,
		PictureUrl:   "PictureUrlThatIsValid",
	}
	return UID, Validmodel
}

func InvalidUpdatedUser() (string, model.TUser) {
	UID := "UidThatIsInvalid"
	InvalidAddress := model.TAddress{
		Address_1:   "Address_1ThatIsInvalid",
		Street:      "StreetThatIsInvalid",
		Tambon:      "TambonThatIsInvalid",
		Amphoe:      "AmphoeThatIsInvalid",
		Province:    "ProvinceThatIsInvalid",
		Postal_code: "Postal_codeThatIsInvalid",
	}
	Invalidmodel := model.TUser{
		UID:          UID,
		Username:     "modelnameThatIsInvalid",
		Phone_number: "PhoneNumberThatIsInvalid",
		Address:      InvalidAddress,
		PictureUrl:   "PictureUrlThatIsInvalid",
	}
	return UID, Invalidmodel
}

func TestUpdateUser(t *testing.T) {
	mockRepo := _repositoryMock.NewRepositories()
	svcs := service.NewServiceRegistry(mockRepo)
	User := svcs.UserService

	expectedUser, err2 := User.GetUserById("123456")
	assert.Equal(t, nil, err2)
	assert.Equal(t, "Korawut the Ming", expectedUser.Username)
	// UID1, Updateduser1 := ValidUpdatedUser()
	// err1 := model.UpdateUser(Updateduser1)
	// modelFetched1, _ := model.GetmodelById(UID1)
	// assert.Equal(t, nil, err1)
	// assert.Equal(t, Updatedmodel1, modelFetched1)

	// UID2, Updatedmodel2 := InvalidUpdatedmodel()
	// modelFetched2Before, _ := model.GetmodelById(UID2)
	// err2 := model.Updatemodel(Updatedmodel2)
	// modelFetched2After, _ := model.GetmodelById(UID2)
	// assert.Equal(t, fmt.Errorf("Invalid UID"), err2)
	// assert.Equal(t, modelFetched2Before, modelFetched2After)
}

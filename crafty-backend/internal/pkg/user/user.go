package user

// type IUser interface {
// 	CreateUser(User TUser) error
// 	GetUserById(UID string) (TUser, error)
// 	UpdateUser(User TUser) error
// 	DeleteUser(UID string) error
// }

func CreateUser(User userRepo.TUser) error {
	return nil
}

func GetUserById(UID string) (repo.TUser, error) {
	user, err := repo.GetUserById(UID)
	return TUser{}, nil
}

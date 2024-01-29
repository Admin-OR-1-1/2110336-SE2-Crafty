package userRepo

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
	Phone_number string
	Address      TAddress
	PictureUrl   string
}

type IUserRepo interface {
	InsertUser(User TUser) error
	DeleteUser(UID string) error
	GetUserById(UID string) (TUser, error)
	UpdateUser(User TUser) error
}

func CreateUserInstance(User TUser) (IUserRepo, error) {
	return &TUser{}, nil
}

func (User *TUser) InsertUser(User TUser) error {
	return nil
}

func (User *TUser) DeleteUser(UID string) error {
	return nil
}

func (User *TUser) GetUserById(UID string) (TUser, error) {
	return TUser{}, nil
}

func (User *TUser) UpdateUser(User TUser) error {
	return nil
}

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
	GetUserById(UID string) error
	UpdateUser(User TUser) error
	CreateUser(User TUser) error
	ToUser() TUser
}

func CreateUserInstance() (IUserRepo, error) {
	return &TUser{}, nil
}

func (r *TUser) InsertUser(user TUser) error {
	return nil
}

func (r *TUser) DeleteUser(uid string) error {
	return nil
}

func (r *TUser) GetUserById(uid string) error {
	return nil
}

func (r *TUser) UpdateUser(user TUser) error {
	return nil
}

func (r *TUser) CreateUser(user TUser) error {
	return nil
}

func (r *TUser) ToUser() TUser {
	return *r
}

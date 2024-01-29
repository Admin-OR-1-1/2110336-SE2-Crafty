package user_repo

type user_repo interface {
	GetUserById(UID string) (User, error)
}

package authRepo

type AuthRepo interface {
  VerifyPassword(username string, password string) (string, error)
  CreateToken(username string) (string, error)
  VerifyToken(token string) (bool, string, error)
}


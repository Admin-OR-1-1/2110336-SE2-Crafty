package auth

import (
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/infrastructure"
	repo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/user-auth/repo"
)

type Auth struct {
  Repo repo.AuthRepo
}

func NewAuth(i *infrastructure.Infrastructure) *Auth {
  firebaseRepo := repo.CreateFirebaseAuthRepo(i)
  return &Auth{
    Repo: firebaseRepo,
  }
}

func (a *Auth) VerifyToken(token string) (bool, error) {
  verified, _, err := a.Repo.VerifyToken(token)
  return verified, err
}
package authRepo

import "firebase.google.com/go/auth"

type AuthRepo interface {
  VerifyToken(token string) (bool, *auth.Token, error)
}


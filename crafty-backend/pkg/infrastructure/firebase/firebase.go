package firebase

import (
	"context"
	"log"

	firebase "firebase.google.com/go"
	"firebase.google.com/go/auth"
)


type FirebaseInstance struct {
  app *firebase.App
}

func NewFirebaseInstance() *FirebaseInstance {
  app, err := firebase.NewApp(context.Background(), nil)
  if err != nil {
          log.Fatalf("error initializing app: %v\n", err)
  }
  return &FirebaseInstance{
    app: app,
  }
}

func (i *FirebaseInstance) GetAuth() *auth.Client {
  auth, err := i.app.Auth(context.Background())
  if err != nil {
          log.Fatalf("error getting Auth client: %v\n", err)
  }
  return auth
}
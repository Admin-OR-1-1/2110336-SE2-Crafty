package infrastructure

import (
	database "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/pkg/infrastructure/database"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/pkg/infrastructure/firebase"
)

type Infrastructure struct {
  Database *database.MongoInstance
  Firebase *firebase.FirebaseInstance
}

func NewInfrastructure() *Infrastructure {
  database := database.NewMongoInstance("","")
  firebase := firebase.NewFirebaseInstance()
  return &Infrastructure{
    Database: database,
    Firebase: firebase,
  }
}

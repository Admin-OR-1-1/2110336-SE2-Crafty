package access

import (
	acces_repository "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/access/domain/repository"
	access_service "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/access/domain/service"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/access/infrastructure/database"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/access/infrastructure/fake"
)

type AccessModule struct {
	repository acces_repository.UserRepository
	service    access_service.UserService
}

func NewAccessModule(useDatabase bool) *AccessModule{
	var repository acces_repository.UserRepository
	if useDatabase {
		repository = &database.UserDBRepository{}
	} else {
		repository = &fake.UserFakeRepository{}
	}
	var service access_service.UserService
	//
	// some code
	//
	return &AccessModule{
		repository: repository,
		service:    service,
	}
}

func (m *AccessModule) GetRepository() acces_repository.UserRepository {
	return m.repository
}

func (m *AccessModule) GetService() access_service.UserService {
	return m.service
}
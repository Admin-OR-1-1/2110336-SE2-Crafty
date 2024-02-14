package mocks

import (
	"context"

	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/model"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository"
	// postRepo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository/post"
)

// type Repositories struct {
// 	UserRepository    IUserRepo
// 	AuthRepository    IAuthRepo
// 	PostRepository    IPostRepo
// 	StorageRepository IStorageRepo
// }

// _, err := s.r.PostRepository.GetPostById(Post.ID)
// if err != nil {
// 	return err // Return error if GetPostById fails
// }

// err = s.r.PostRepository.UpdatePost(Post)

func NewRepositories() *repository.Repositories {
	return &repository.Repositories{
		UserRepository:    nil,
		AuthRepository:    nil,
		StorageRepository: nil,
		PostRepository:    NewPostRepository(),
	}
}

func GetPostById(ctx context.Context, ID string) (*model.TPost, error) {
	return &model.TPost{}, nil
}

// func (_m *Repository) UpdatePost

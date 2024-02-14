package mocks

import (
	model "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/model"
)

type IPostRepo interface {
	CreatePost(Post model.TPost) error
	UpdatePost(Post model.TPost) error
	DeletePost(ID string) error
	GetPostById(ID string) (model.TPost, error)
	GetPost(lowerfilter model.TPost, upperratingstar float32, upperprice float64, limit int) ([]model.TPost, error)
}

// PostRepository is a mock implementation of IPostRepo interface
type PostRepository struct{}

// CreatePost mocks the CreatePost method
func (r *PostRepository) CreatePost(Post model.TPost) error {
	// Implement mock behavior here
	return nil // Return nil for now
}

// UpdatePost mocks the UpdatePost method
func (r *PostRepository) UpdatePost(Post model.TPost) error {
	// // Implement mock behavior here
	// return fmt.Errorf("error updating post") // Return nil for now
	return nil
}

// DeletePost mocks the DeletePost method
func (r *PostRepository) DeletePost(ID string) error {
	// Implement mock behavior here
	return nil // Return nil for now
}

func (r *PostRepository) GetPostById(ID string) (model.TPost, error) {
	if ID == "paetong" {
		return model.TPost{ID: "paetong",
			Name:      "Thanat Wongsamut",
			Detail:    "Very Eleganto",
			Content:   "No content",
			CrafterID: "my mom"}, nil
	}
	return model.TPost{}, nil
}

func (r *PostRepository) GetPost(lowerfilter model.TPost, upperratingstar float32, upperprice float64, limit int) ([]model.TPost, error) {
	return []model.TPost{}, nil
}

// NewPostRepository creates a new instance of PostRepository
func NewPostRepository() IPostRepo {
	return &PostRepository{}
}

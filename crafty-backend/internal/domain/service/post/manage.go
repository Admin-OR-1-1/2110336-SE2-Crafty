package post

import (
	"errors"
	"fmt"

	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/model"
)

/*
	type IPost interface {
		CreatePost(Post postRepo.TPost) error
		UpdatePost(Post postRepo.TPost) error
		DeletePost(ID string) error
		GetPostById(ID string) (postRepo.TPost, error)
	}
*/

func IsValidPost(Post model.TPost) bool {
	if Post.ID == "" {
		return false
	}
	if Post.Name == "" {
		return false
	}
	if Post.Detail == "" {
		return false
	}
	if Post.Content == "" {
		return false
	}
	if Post.CrafterID == "" {
		return false
	}
	if Post.Thumbnail.ThumbnailUrl == "" {
		return false
	}
	if Post.Thumbnail.ThumbnailType == "" {
		return false
	}
	return true
}

func (s *PostService) CreatePost(Post model.TPost) error {
	
	if IsValidPost(Post) {
		err := s.r.PostRepository.CreatePost(Post)
		return err
	} else {
		return fmt.Errorf("Invalid Post")
	}
}

func (s *PostService) UpdatePost(Post model.TPost) error {
	return nil
}

// Jinny
func (s *PostService) DeletePost(ID string) error {
	post, err := s.r.PostRepository.GetPostById(ID)
	if err != nil {
		return err // Return error if GetPostById fails
	}

	// Check if the post exists
	if post.ID != "" {
		// Perform deletion operation in the database
		// DeletePostFromDatabase(ID)
		return nil // Return nil if deletion is successful
	}

	// Return error if the post does not exist
	return errors.New("post not found")
}

func (s *PostService) GetPostById(ID string) (model.TPost, error) {
	return model.TPost{}, nil
}

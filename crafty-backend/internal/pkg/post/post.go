package post

import (
	"errors"
	"fmt"

	postRepo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/post/repo"
)

/*
	type IPost interface {
		CreatePost(Post postRepo.TPost) error
		UpdatePost(Post postRepo.TPost) error
		DeletePost(ID string) error
		GetPostById(ID string) (postRepo.TPost, error)
	}
*/

// not have list now
func HaveNil(Post postRepo.TPost) bool {
	if Post.ID == "" {
		return true
	}
	if Post.Name == "" {
		return true
	}
	if Post.Detail == "" {
		return true
	}
	if Post.Content == "" {
		return true
	}
	if Post.CrafterID == "" {
		return true
	}
	if Post.Thumbnail.ThumbnailUrl == "" {
		return true
	}
	if Post.Thumbnail.ThumbnailType == "" {
		return true
	}
	return false
}

func CreatePost(Post postRepo.TPost) error {
	postInstance, _ := postRepo.CreatePostInstance()
	if HaveNil(Post) {
		return fmt.Errorf("Failed to create post")
	} else {
		postInstance.CreatePost(Post)
		return nil
	}
}

// Jinny
func UpdatePost(Post postRepo.TPost) error {
	return nil
}

// Jinny
func DeletePost(ID string) error {
	post, err := GetPostById(ID)
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

func GetPostById(ID string) (postRepo.TPost, error) {
	return postRepo.TPost{}, nil
}

// func GetPostById(ID string) (postRepo.TPost, error) {
// wait for the connection to the database.
// for _, post := range "Database" {
//     if post.ID == ID {
//         return post, nil
//     }
// }

// return postRepo.TPost{}, errors.New("post not found")
// }

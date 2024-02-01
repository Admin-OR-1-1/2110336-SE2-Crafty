package post

import (
	postRepo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/post/repo"
	"errors"
)

/*
	type IPost interface {
		CreatePost(Post postRepo.TPost) error
		UpdatePost(Post postRepo.TPost) error
		DeletePost(ID string) error
		GetPostById(ID string) (postRepo.TPost, error)
	}
*/
func CreatePost(Post postRepo.TPost) error {
	return nil
}

// Jinny
func UpdatePost(ID string, Post postRepo.TPost) error {
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

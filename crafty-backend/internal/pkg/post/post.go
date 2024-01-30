package post

import (
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
func CreatePost(Post postRepo.TPost) error {
	return nil
}
func UpdatePost(Post postRepo.TPost) error {
	return nil
}
func DeletePost(ID string) error {
	return nil
}
func GetPostById(ID string) (postRepo.TPost, error) {
	//for test only!!!!
	if ID == "123456" {
		ValidTThumbnail := postRepo.TThumbnail{
			ThumbnailUrl:  "www.123.com",
			ThumbnailType: "video",
		}
		ValidTReview := postRepo.TReview{
			RatingStar: 3.5,
			Comment:    "very good",
			UID:        "1",
		}
		ValidTPackage := postRepo.TPackage{
			Price: 450.0,
		}
		ValidTPost := postRepo.TPost{
			ID:          ID,
			Thumbnail:   ValidTThumbnail,
			Name:        "tote bag handmade",
			ReviewList:  []postRepo.TReview{ValidTReview},
			PackageList: []postRepo.TPackage{ValidTPackage},
			Detail:      "Tote Bag - Black",
			Content:     "Featuring a boxy shape marked by clean lines and a minimalist design, this Perline bag in black is a timeless piece that will never go out of style. It also comes fitted with a magnetic closure for easy access to your belongings.",
			CrafterID:   "456",
		}
		return ValidTPost, nil
	}

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

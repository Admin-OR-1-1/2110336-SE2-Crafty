package post_test

import (
	"testing"

	post "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/post"
	repo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/post/repo"
)

func ValidPost() (string, repo.TPost) {
	ID := "123456"
	ValidTThumnail := repo.TThumbnail{
		ThumbnailUrl:  "www.123.com",
		ThumbnailType: "vedio",
	}
	ValidTReview := repo.TReview{
		RatingStar: 3.5,
		Comment:    "very good",
		UID:        "1",
	}
	ValidTPackage := repo.TPackage{
		Price: 450.0,
	}
	ValidTPost := repo.TPost{
		ID:          ID,
		Thumbnail:   ValidTThumnail,
		Name:        "tote bag handmade",
		ReviewList:  []repo.TReview{ValidTReview},
		PackageList: []repo.TPackage{ValidTPackage},
		Detail:      "Tote Bag - Black	",
		Content:     "Featuring a boxy shape marked by clean lines and a minimalist design, this Perline bag in black is a timeless piece that will never go out of style. It also comes fitted with a magnetic closure for easy access to your belongings.",
		CrafterID:   "456",
	}

	return ID, ValidTPost
}

func TestCreatePost(t *testing.T) {
	// Call the function to create a post
	_, ValidTPost := ValidPost()
	c_post := post.CreatePost(ValidTPost)

	// have to call get

	// Check if an error occurred
	if c_post != nil {
		t.Errorf("Failed to create post: %v", err)
	}

	// Check if the post ID is not empty
	if postID == "" {
		t.Error("Empty post ID returned")
	}

	// Optionally, you can add more assertions here
}

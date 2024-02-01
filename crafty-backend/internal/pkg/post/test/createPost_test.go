package post_test

import (
	"fmt"
	"testing"

	post "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/post"
	repo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/post/repo"
	"github.com/stretchr/testify/assert"
)

func ValidPost() (string, repo.TPost) {
	ID := "123456"
	ValidTThumnail := repo.TThumbnail{
		ThumbnailUrl:  "www.123.com",
		ThumbnailType: "video",
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

func InValidPost() string {
	return "Failed to create post"
}

func TestCreatePost(t *testing.T) {
	// Call the function to create a post
	ID, ValidTPost := ValidPost()
	post.CreatePost(ValidTPost)

	// have to call get
	post1, err1 := post.GetPostById(ID)
	assert.Equal(t, ValidTPost, post1)
	assert.Equal(t, nil, err1)

	InvalidTPost := InValidPost()
	post2, err2 := post.GetPostById(InvalidTPost)
	assert.Equal(t, repo.TPost{}, post2)
	assert.Equal(t, fmt.Errorf("Failed to create post"), err2)

}

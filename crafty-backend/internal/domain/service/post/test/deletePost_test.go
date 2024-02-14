package post_test

import (
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/model"
)

// ValidPost from create post

func InvalidPost2() (string, model.TPost) {
	InvalidID := "invalid"
	InvalidTThumnail := model.TThumbnail{
		ThumbnailUrl:  "invalid",
		ThumbnailType: "invalid",
	}
	InvalidTReview := model.TReview{
		RatingStar: 0.0,
		Comment:    "invalid",
		UID:        "invalid",
	}
	InvalidTPackage := model.TPackage{
		Price: 0.0,
	}
	InvalidTPost := model.TPost{
		ID:          InvalidID,
		Thumbnail:   InvalidTThumnail,
		Name:        "invalid",
		ReviewList:  []model.TReview{InvalidTReview},
		PackageList: []model.TPackage{InvalidTPackage},
		Detail:      "invalid",
		Content:     "invalid",
		CrafterID:   "invalid",
	}

	return InvalidID, InvalidTPost
}

// func TestDeletePost(t *testing.T) {
// 	//case ID is valid
// 	ID, _ := ValidPost()
// 	err1 := post.DeletePost(ID)
// 	assert.Equal(t, nil, err1)

// 	//case ID is invalid
// 	ID2, _ := InvalidPost2()
// 	err2 := post.DeletePost(ID2)
// 	assert.Equal(t, fmt.Errorf("InvalidID"), err2)
// }

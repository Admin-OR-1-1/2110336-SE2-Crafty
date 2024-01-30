package post_test

import (
	"fmt"
	"testing"

	post "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/post"
	repo "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/post/repo"
	"github.com/stretchr/testify/assert"
)

func TestGetPostById(t *testing.T) {
	// Call the function to create a post
	ID, ValidTPost := ValidPost()

	// have to call get
	post1, err1 := post.GetPostById(ID)
	assert.Equal(t, ValidTPost, post1)
	assert.Equal(t, nil, err1)

	InvalidTPost := InValidPost()
	post2, err2 := post.GetPostById(InvalidTPost)
	assert.Equal(t, repo.TPost{}, post2)
	assert.Equal(t, fmt.Errorf("Failed to create post"), err2)

}

package post_test

import (
	// "context"

	"testing"

	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/service"
	// "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/pkg/infrastucture"

	// "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/model"

	// "github.com/stretchr/testify/mock"
	_repositoryMock "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/mocks"
	// "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/service/post"
	// "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository"

	"github.com/stretchr/testify/assert"
)

// ValidPost from create post
//InvalidPost2 from delete post

func TestUpdatePost(t *testing.T) {
	// postService = post.NewPostService(repo)
	// service.ServiceRegistry.PostService.UpdatePost()
	// r := repo.NewRepositories()

	// post.NewPostService(r)
	// infra := infrastucture.NewInfrastructure()
	// repos := repository.NewRepositories(infra)
	// svcs := service.NewServiceRegistry(repos)
	// post := svcs.PostService

	// mockRequest := &model.TPost{
	// 	ID:          "",
	// 	Thumbnail:   model.TThumbnail{},
	// 	Name:        "",
	// 	ReviewList:  []model.TReview{},
	// 	PackageList: []model.TPackage{},
	// 	Detail:      "",
	// 	Content:     "",
	// 	CrafterID:   "",
	// }

	// mockPostRepo := new(_repositoryMock)

	mockRepo := _repositoryMock.NewRepositories()
	// mockPostRepo := &repository.Repositories{}
	// mockPostRepo := &repository.Repositories{}

	// repository.
	// mockPostRepo.On("GetPostById", context.TODO(), mockRequest).Return(1, nil).Once()
	svcs := service.NewServiceRegistry(mockRepo)
	post := svcs.PostService

	// ID, NewTPost := ValidPost()
	// _, NewTPost := ValidPost()
	// post.UpdatePost(NewTPost)

	// postMock := &post.PostService{}
	// postMock := new(post.PostService)
	// postMock.UpdatePost(NewTPost)

	// err1 := post.UpdatePost(NewTPost)

	// err1 := post.UpdatePost(NewTPost)
	// AfterTPost, _ := post.GetPostById(ID)

	expectedPost, err2 := post.GetPostById("paetong")
	assert.Equal(t, nil, err2)
	assert.Equal(t, "Thanat Wongsamut", expectedPost.Name)

	// assert.Equal(t, nil, err1)
	// assert.Equal(t, NewTPost, AfterTPost)

	// ID2, NewTPost2 := InvalidPost2()
	// BeforeTPost2, _ := post.GetPostById(ID2)
	// err2 := post.UpdatePost(NewTPost2)
	// AfterTPost2, _ := post.GetPostById(ID2)
	// assert.Equal(t, fmt.Errorf("FailedToUpdatePost"), err2)
	// assert.Equal(t, BeforeTPost2, AfterTPost2)
}

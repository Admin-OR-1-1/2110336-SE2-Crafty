package user_repo

import (
	post "github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/pkg/post"
)

type IPostRepo interface {
	CreatePost(Post post.TPost) error
	EditPost(Post post.TPost) error
	RemovePost(ID string) error
}

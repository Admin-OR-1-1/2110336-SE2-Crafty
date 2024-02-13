package postRepo

import (
	"context"
	"time"

	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/model"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/pkg/infrastructure"
	"go.mongodb.org/mongo-driver/mongo"
)

type TMongoThumbnail struct {
	ThumbnailUrl  string `bson:"thumbnail_url"`
	ThumbnailType string `bson:"thumbnail_type"`
}

type TMongoReview struct {
	RatingStar float32 `bson:"rating_star"`
	Comment    string  `bson:"comment"`
	UID        string  `bson:"uid"`
}

type TMongoPackage struct {
	Price float64 `bson:"price"`
}

type TMongoPost struct {
	ID          string          `bson:"id"`
	Thumbnail   TMongoThumbnail `bson:"thumbnail"`
	Name        string          `bson:"name"`
	ReviewList  []TMongoReview  `bson:"review_list"`
	PackageList []TMongoPackage `bson:"package_list"`
	Detail      string          `bson:"detail"`
	Content     string          `bson:"content"`
	CrafterID   string          `bson:"crafter_id"`
}

type MongoPostRepository struct {
	db *mongo.Collection
}

func NewMongoPostRepository(i *infrastructure.Infrastructure) IPostRepo {
	col := i.Database.NewMongodbCollection("post")
	return &MongoPostRepository{db: col}
}

func (post MongoPostRepository) InsertPost(Post model.TPost) error {
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	_, err := post.db.InsertOne(ctx, ConvertToMongoPost(Post))
	return err
}

func (post MongoPostRepository) DeletePost(ID string) error {
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	_, err := post.db.DeleteOne(ctx, ID)
	return err
}

func (post MongoPostRepository) GetPostById(ID string) (model.TPost, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	var result TMongoPost
	err := post.db.FindOne(ctx, ID).Decode(&result)
	if err != nil {
		return model.TPost{}, err
	}
	return result.ToPost(), nil
}

func (post MongoPostRepository) UpdatePost(Post model.TPost) error {
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	_, err := post.db.ReplaceOne(ctx, Post.ID, ConvertToMongoPost(Post))
	return err
}

func (post MongoPostRepository) GetPost(filter model.TPost, limit int) ([]model.TPost, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	var results []TMongoPost
}

func (post MongoPostRepository) CreatePost(Post model.TPost) error {
	return nil
}

func ConvertToMongoPost(post model.TPost) TMongoPost {
	return TMongoPost{
		ID: post.ID,
		Thumbnail: TMongoThumbnail{
			ThumbnailUrl:  post.Thumbnail.ThumbnailUrl,
			ThumbnailType: post.Thumbnail.ThumbnailType,
		},
		Name:        post.Name,
		ReviewList:  convertToMongoReviews(post.ReviewList),
		PackageList: convertToMongoPackages(post.PackageList),
		Detail:      post.Detail,
		Content:     post.Content,
		CrafterID:   post.CrafterID,
	}
}

func convertToMongoReviews(reviews []model.TReview) []TMongoReview {
	var mongoReviews []TMongoReview
	for _, review := range reviews {
		mongoReviews = append(mongoReviews, TMongoReview{
			RatingStar: review.RatingStar,
			Comment:    review.Comment,
			UID:        review.UID,
		})
	}
	return mongoReviews
}

func convertToMongoPackages(packages []model.TPackage) []TMongoPackage {
	var mongoPackages []TMongoPackage
	for _, pkg := range packages {
		mongoPackages = append(mongoPackages, TMongoPackage{
			Price: pkg.Price,
		})
	}
	return mongoPackages
}

func (thumbnail TMongoThumbnail) ToThumbnail() model.TThumbnail {
	return model.TThumbnail{
		ThumbnailUrl:  thumbnail.ThumbnailUrl,
		ThumbnailType: thumbnail.ThumbnailType,
	}
}

func (post TMongoPost) ToPost() model.TPost {
	reviewList := make([]model.TReview, len(post.ReviewList))
	for i, review := range post.ReviewList {
		reviewList[i] = model.TReview{
			RatingStar: review.RatingStar,
			Comment:    review.Comment,
			UID:        review.UID,
		}
	}

	packageList := make([]model.TPackage, len(post.PackageList))
	for i, pkg := range post.PackageList {
		packageList[i] = model.TPackage{
			Price: pkg.Price,
		}
	}

	return model.TPost{
		ID:          post.ID,
		Thumbnail:   post.Thumbnail.ToThumbnail(),
		Name:        post.Name,
		ReviewList:  reviewList,
		PackageList: packageList,
		Detail:      post.Detail,
		Content:     post.Content,
		CrafterID:   post.CrafterID,
	}
}

package postRepo

import (
	"context"
	"time"

	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/domain/model"
	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/pkg/infrastructure"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
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

type TMongoPost struct {
	ID         string            `bson:"id"`
	Thumbnails []TMongoThumbnail `bson:"thumbnails"`
	Name       string            `bson:"name"`
	ReviewList []TMongoReview    `bson:"review_list"`
	Price      float64           `bson:"price"`
	Detail     string            `bson:"detail"`
	Content    string            `bson:"content"`
	CrafterID  string            `bson:"crafter_id"`
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

func (post MongoPostRepository) DeletePost(UID string) error {
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	_, err := post.db.DeleteOne(ctx, UID)
	return err
}

func (post MongoPostRepository) GetPostById(UID string) (model.TPost, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	var result TMongoPost
	err := post.db.FindOne(ctx, UID).Decode(&result)
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

func (post MongoPostRepository) CreatePost(Post model.TPost) error {
	return nil
}

func ConvertToMongoPost(post model.TPost) TMongoPost {
	return TMongoPost{
		ID:         post.ID,
		Thumbnails: convertToMongoThumbnails(post.Thumbnails),
		Name:       post.Name,
		ReviewList: convertToMongoReviews(post.ReviewList),
		Price:      post.Price,
		Detail:     post.Detail,
		Content:    post.Content,
		CrafterID:  post.CrafterID,
	}
}

func convertToMongoThumbnails(thumbnails []model.TThumbnail) []TMongoThumbnail {
	var mongoThumbnails []TMongoThumbnail
	for _, thumbnail := range thumbnails {
		mongoThumbnails = append(mongoThumbnails, TMongoThumbnail{
			ThumbnailUrl:  thumbnail.ThumbnailUrl,
			ThumbnailType: thumbnail.ThumbnailType,
		})
	}
	return mongoThumbnails
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

	thumbnails := make([]model.TThumbnail, len(post.Thumbnails))
	for i, thumbnail := range post.Thumbnails {
		thumbnails[i] = model.TThumbnail{
			ThumbnailUrl:  thumbnail.ThumbnailUrl,
			ThumbnailType: thumbnail.ThumbnailType,
		}
	}

	return model.TPost{
		ID:         post.ID,
		Thumbnails: thumbnails,
		Name:       post.Name,
		ReviewList: reviewList,
		Price:      post.Price,
		Detail:     post.Detail,
		Content:    post.Content,
		CrafterID:  post.CrafterID,
	}
}

func (post MongoPostRepository) GetPost(lowerfilter model.TPost, upperratingstar float32, upperprice float64, limit int) ([]model.TPost, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var results []TMongoPost
	filterQuery := bson.M{} // Initialize an empty filter query

	// Add filtering conditions based on the provided filter model.TPost if needed
	// For example, if filter has a Name field:
	if lowerfilter.Name != "" {
		filterQuery["name"] = bson.M{"$regex": lowerfilter.Name, "$options": "i"} // Case-insensitive partial match
	}
	// If filter has a CrafterID field:
	if lowerfilter.CrafterID != "" {
		filterQuery["crafterid"] = lowerfilter.CrafterID
	}

	// Add filtering conditions for price within the range
	filterQuery["price"] = bson.M{"$gte": lowerfilter.Price, "$lte": upperprice}

	// Perform the find operation with the filter and limit
	cursor, err := post.db.Find(ctx, filterQuery, options.Find().SetLimit(int64(limit)))
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	// Iterate through the cursor and decode results into TMongoPost structs
	for cursor.Next(ctx) {
		var result TMongoPost
		if err := cursor.Decode(&result); err != nil {
			return nil, err
		}
		results = append(results, result)
	}
	if err := cursor.Err(); err != nil {
		return nil, err
	}

	// Convert TMongoPost structs to model.TPost and return
	var filteredPosts []model.TPost
	for _, mongoPost := range results {
		filteredPosts = append(filteredPosts, mongoPost.ToPost())
	}
	return filteredPosts, nil
}

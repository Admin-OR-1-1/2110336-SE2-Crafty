package model

type TThumbnail struct {
	ThumbnailUrl  string
	ThumbnailType string
}

type TReview struct {
	RatingStar float32
	Comment    string
	UID        string
}

type TPost struct {
	ID         string
	Thumbnails []TThumbnail
	Name       string
	ReviewList []TReview
	Price      float64
	Detail     string
	Content    string
	CrafterID  string
}

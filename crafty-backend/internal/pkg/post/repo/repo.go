package post_repo

type TThumbnail struct {
	ThumbnailUrl  string
	ThumbnailType string
}

type TReview struct {
	RatingStar float32
	Comment    string
	UID        string
}

type TPackage struct {
	Price float64
}

type TPost struct {
	ID          string
	Thumbnail   TThumbnail
	Name        string
	ReviewList  []TReview
	PackageList []TPackage
	Detail      string
	Content     string
	CrafterID   string
}

type IPostRepo interface {
	CreatePost(Post TPost) error
	UpdatePost(Post TPost) error
	DeletePost(ID string) error
	GetPostById(ID string) (TPost, error)
}

func (repo *TPost) CreatePost(post TPost) error {
	// Implement logic to create a post
	return nil
}

func (repo *TPost) UpdatePost(post TPost) error {
	// Implement logic to update a post
	return nil
}

func (repo *TPost) DeletePost(ID string) error {
	// Implement logic to delete a post
	return nil
}

func (repo *TPost) GetPostById(ID string) (TPost, error) {
	// Implement logic to get a post by ID
	return TPost{}, nil
}

// CreateUserInstance creates and returns an instance of PostRepo
func CreateUserInstance() (IPostRepo, error) {
	return &TPost{}, nil
}

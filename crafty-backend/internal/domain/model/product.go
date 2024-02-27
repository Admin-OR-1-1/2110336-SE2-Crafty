package model

type Status string // Status is a type for product status
const (
	InProgress       Status = "In Progress"
	Completed        Status = "Completed"
	ReadyForShipping Status = "Ready for Shipping"
	Cancelled        Status = "Cancelled"
)

type TProduct struct {
	PostID    string
	Price     float64
	Content   string
	CrafteeID string
	Accepted  bool
	Status    Status
}

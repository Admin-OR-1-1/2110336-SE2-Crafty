export interface Post {
  Content: string;
  CrafterID: string;
  Detail: string;
  ID: string;
  Name: string;
  PackageList: Package[];
  ReviewList: Review[];
  Thumbnail: Thumbnail;
}

export interface Package {
  Price: number;
}

export interface Review {
  RatingStar: number;
  Comment: string;
  UID: string;
}

export interface Thumbnail {
  ThumbnailUrl: string;
  //   TODO: change to enum with backend
  ThumbnailType: string;
}

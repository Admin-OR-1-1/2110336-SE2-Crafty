import { Review } from '../interface/post';

export const getAvgRatingFromReviewList = (reviewList: Review[]): number => {
  let rating = 0;
  reviewList.forEach((review) => {
    rating += review.RatingStar;
  });
  return Math.floor(rating / reviewList.length);
};

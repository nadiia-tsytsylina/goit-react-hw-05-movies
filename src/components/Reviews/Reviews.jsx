import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/fetchAPI';
import {
  AuthorName,
  ReviewText,
  ReviewLink,
  ReviewsNotFound,
  ReviewItem,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    if (!movieId) {
      return;
    }

    getMovieReviews(movieId)
      .then(data => {
        if (data.results.length < 1) {
          setReviews(null);
          setIsLoading(false);
          return;
        }
        setReviews(data.results);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(review => {
            return (
              <ReviewItem key={review.id}>
                <AuthorName>{review.author}</AuthorName>
                {review.content.length > 1000 ? (
                  <>
                    <ReviewText>{review.content.slice(0, 1000)}</ReviewText>
                    <ReviewLink
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </ReviewLink>
                  </>
                ) : (
                  <ReviewText>{review.content}</ReviewText>
                )}
              </ReviewItem>
            );
          })}
        </ul>
      ) : (
        <ReviewsNotFound>
          We don't have any reviews for this movie
        </ReviewsNotFound>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Reviews;

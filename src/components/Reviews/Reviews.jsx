import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/fetchAPI';
import {
  ReviewsList,
  AuthorName,
  ReviewText,
  ReviewLink,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <>
      {reviews ? (
        <ReviewsList>
          {reviews.map(review => {
            return (
              <li key={review.id}>
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
              </li>
            );
          })}
        </ReviewsList>
      ) : (
        <p>Sorry</p>
      )}
    </>
  );
};

export default Reviews;

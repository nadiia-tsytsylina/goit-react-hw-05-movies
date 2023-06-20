import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import {
  AdditionalTitle,
  AdditionalList,
  AdditionalLink,
} from 'components/AdditionalInfo/AdditionalInfo.styled';

const AdditionalInfo = () => {
  return (
    <>
      <AdditionalTitle>Additional information</AdditionalTitle>
      <AdditionalList>
        <li>
          <AdditionalLink to="cast">Cast</AdditionalLink>
        </li>
        <li>
          <AdditionalLink to="reviews">Reviews</AdditionalLink>
        </li>
      </AdditionalList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionalInfo;

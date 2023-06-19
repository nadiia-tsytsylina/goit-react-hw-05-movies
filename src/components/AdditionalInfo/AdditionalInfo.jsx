import { Outlet } from 'react-router-dom';
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
      <Outlet />
    </>
  );
};

export default AdditionalInfo;

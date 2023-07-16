import { RotatingLines } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderBox>
      <RotatingLines
        strokeColor="#5fc3e4"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderBox>
  );
}

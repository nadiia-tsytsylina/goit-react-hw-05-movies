import styled from '@emotion/styled';
const NotFoundContainer = styled('div')`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const NotFoundTitle = styled('h2')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #31d0aa;
  font-size: 48px;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Page is not found</NotFoundTitle>
    </NotFoundContainer>
  );
};

export default NotFound;

import styled from '@emotion/styled';

export const SearchFormBox = styled('form')`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  border: 1px solid #e7e9fc;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  overflow: hidden;
`;

export const SearchFormInput = styled('input')`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  line-height: 1.2;
  border: none;
  outline: none;
  padding: 8px 16px;
  background-color: #fff;
  color: #111111;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormButton = styled('button')`
  display: inline-block;
  background-color: #31d0aa;
  color: #111111;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 600;
  width: 80px;
  height: 48px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

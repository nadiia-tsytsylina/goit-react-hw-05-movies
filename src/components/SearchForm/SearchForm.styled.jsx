import styled from '@emotion/styled';

export const SearchFormBox = styled('form')`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  background-color: transparent;
  font-size: 24px;
  width: 100%;
  max-width: 680px;
  border-radius: 12px;
  border: 2px solid #5fc3e4;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  overflow: hidden;
`;

export const SearchFormInput = styled('input')`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  line-height: 1.2;
  border: none;
  outline: none;
  padding: 8px 16px;
  background-color: transparent;
  color: #293b4c;

  &::placeholder {
    font: inherit;
    font-size: 24px;
  }
`;

export const SearchFormButton = styled('button')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #5fc3e4;
  color: #111111;
  opacity: 0.8;
  font-size: 24px;
  font-weight: 600;
  width: 130px;
  height: 48px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 18px 5px #5fc3e4;
  }
`;

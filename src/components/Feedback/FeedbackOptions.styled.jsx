import styled from 'styled-components';

export const WrapperBtn = styled.div`
  display: flex;
  padding-left: 60px;
`;

export const Button = styled.button`
  width: 130px;
  height: 50px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.12;
  letter-spacing: 0.2em;
  color: #000;
  background-color: transparent;
  border: 2px solid #fff;
  box-shadow: 1px 1px 10px 10px #fff;
  border-radius: 6px;

  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

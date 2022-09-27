import styled from 'styled-components';

export const Wrapper = styled.div`
text-align: center
  align-items: center;
  &:not(:last-child) {
    padding-bottom: 30px;
    max-width: 600px
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  text-align: center
  align-items: center;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.8;
  letter-spacing: 0.2em;
  margin-bottom: 15px;
  color: #000;
  
`;

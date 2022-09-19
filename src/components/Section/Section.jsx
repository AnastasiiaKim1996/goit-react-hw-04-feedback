import PropTypes from 'prop-types';
import { Wrapper, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

export const Section = ({ title, children }) => {
  <div className={css.wrapper}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </div>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

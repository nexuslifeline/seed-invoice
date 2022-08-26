import PropTypes from 'prop-types';
import Styles from './Card.module.scss';

const Card = ({ body, header, footer, children }) => {
  const run = (cb) => (typeof cb === 'function' ? cb() : cb);
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>{run(header)}</div>
      <div className={Styles.body}>
        {run(body)}
        {children}
      </div>
      <div className={Styles.footer}>{run(footer)}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default Card;

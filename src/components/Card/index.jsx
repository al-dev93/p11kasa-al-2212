import styles from './style.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/************************************************/
//*  composant Card                             */
/************************************************/

const Card = ({ flatId, image, title }) => (
  <div className={styles.cardWrapper}>
    <Link className={styles.cardLink} to={`/flat/${flatId}`}>
      <div className={styles.cardContent}>
        <div className={styles.cardImageWrapper}>
          <img className={styles.cardImage} src={image} alt='' />
        </div>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
    </Link>
  </div>
);
// déclaration de type des props
Card.propTypes = {
  flatId: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default Card;

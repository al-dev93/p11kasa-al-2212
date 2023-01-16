import styles from './style.module.css';
import { useState } from 'react';
import Arrow from '../../assets/ARROW_UP.svg';
import PropTypes from 'prop-types';

/************************************************/
//*  Composant Collapse                         */
/************************************************/

const Collapse = ({ size, title, content }) => {
  const [isOpen, setOpen] = useState(false);
  const isHalf = size === 'half';

  return (
    <div className={styles.collapseWrapper}>
      <>
        <button
          className={isHalf ? styles.halfCollapseButton : styles.wideCollapseButton}
          onClick={() => setOpen(!isOpen)}
        >
          {title}
          <span
            className={isHalf ? styles.halfCollapseArrowWrapper : styles.wideCollapseArrowWrapper}
          >
            <img className={isOpen ? styles.openArrow : styles.closeArrow} src={Arrow} alt='' />
          </span>
        </button>
        {isOpen ? (
          <div className={isHalf ? styles.halfCollapseDropdown : styles.wideCollapseDropdown}>
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        ) : null}
      </>
    </div>
  );
};
// déclaration de type des props
Collapse.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default Collapse;

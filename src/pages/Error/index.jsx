import styles from './style.module.css';
import { Link } from 'react-router-dom';

/************************************************/
//*  corps de page Error                        */
/************************************************/

const Error = () => {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.errorNumber}>404</h1>
      <p className={styles.errorMessage}>Oups! La page que vous demandez n&apos;existe pas.</p>
      <p className={styles.backHomeLink}>
        <Link to={'/'}>-Retourner sur la page d&apos;accueil</Link>
      </p>
    </div>
  );
};

export default Error;

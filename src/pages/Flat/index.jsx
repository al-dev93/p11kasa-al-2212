import { Navigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import SlideShow from '../../components/SlideShow';
import Collapse from '../../components/Collapse';
import flats from '../../data/logements.json';
import marked from '../../assets/STAR_PRIMARY.svg';
import unmarked from '../../assets/STAR_LIGHT.svg';

/************************************************/
//*  corps de page Flat                         */
/************************************************/

const Flat = () => {
  const { flatId } = useParams();
  const flat = flats.find((flat) => flat.id === flatId);

  if (!flat) return <Navigate to='/error' replace={true} />;

  const [surname, name] = flat.host.name.split(' ');
  const scoringScale = [1, 2, 3, 4, 5];

  return (
    <div className={styles.pageWrapper}>
      <SlideShow images={flat.pictures} />
      <article className={styles.gridWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{flat.title}</h1>
          <h2 className={styles.location}>{flat.location}</h2>
        </div>
        <p className={styles.name}>
          {surname}
          <br />
          {name}
        </p>
        <img className={styles.photo} src={flat.host.picture} alt='' />
        <div className={styles.tagWrapper}>
          {flat.tags.map((tag, index) => (
            <span className={styles.tag} key={`${tag}-${index}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.ratingWrapper}>
          {scoringScale.map((score, index) =>
            flat.rating >= score ? (
              <img className={styles.star} key={`${marked}-${index}`} src={marked} alt='' />
            ) : (
              <img className={styles.star} key={`${unmarked}-${index}`} src={unmarked} alt='' />
            ),
          )}
        </div>
        <div className={styles.collapseDescriptionWrapper}>
          <Collapse size={'half'} title={'Description'} content={flat.description} />
        </div>
        <div className={styles.collapseEquipmentWrapper}>
          <Collapse size={'half'} title={'Équipements'} content={flat.equipments} />
        </div>
      </article>
    </div>
  );
};

export default Flat;

import styles from './styles.module.css';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import data from '../../data/logements.json';
// import BannerImage from '../../assets/images/IMG_HOME_PAGE.png';

/************************************************/
//*  corps de page Home                         */
/************************************************/

const Home = () => (
  <div className={styles.pageWrapper}>
    <Banner>
      <h1 className={styles.slogan}>Chez vous, partout et ailleurs</h1>
    </Banner>
    <section className={styles.gallery}>
      {data.map((flat) => (
        <Card key={flat.id} flatId={flat.id} image={flat.cover} title={flat.title} />
      ))}
    </section>
  </div>
);

export default Home;

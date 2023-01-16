import styles from './style.module.css';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
// import BannerImage from '../../assets/images/IMG_ABOUT_PAGE.png';

/************************************************/
//*  corps de page About                        */
/************************************************/

// contenu texte des collapse
const principles = [
  {
    principle: 'Fiabilité',
    definition:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    principle: 'Respect',
    definition:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    principle: 'Service',
    definition:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    principle: 'Sécurité',
    definition:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

const About = () => (
  <div className={styles.pageWrapper}>
    <Banner />
    <div className={styles.collapseWrapper}>
      {principles.map((item, index) => (
        <Collapse
          key={`${item.principle}-${index}`}
          size={'wide'}
          title={item.principle}
          content={item.definition}
        />
      ))}
    </div>
  </div>
);

export default About;

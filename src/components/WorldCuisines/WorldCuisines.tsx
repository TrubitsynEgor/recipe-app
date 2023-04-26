import styles from './WorldCuisines.module.scss';
import { Container, cuisines } from '..';
import { Link } from 'react-router-dom';


export const WorldCuisines = () => {

  return (
    <Container>
      <h1>Recipes from around the world</h1>
      <ul className={styles.list}>
        {cuisines.map(el => (
          <li key={el.title} className={styles.item}>
            <Link to={el.title.toLowerCase()}>
              <span>{el.title}</span>
              {el.image}
            </Link>
            <div className={styles.descr}>
              {el.description}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
};

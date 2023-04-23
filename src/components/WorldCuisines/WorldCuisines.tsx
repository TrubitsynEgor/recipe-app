import { DetailsDivProps } from '@/types';
import styles from './WorldCuisines.module.scss';
import cn from 'classnames'
import { Container, cuisines } from '..';
import { Link } from 'react-router-dom';

interface WorldCuisinesProps extends DetailsDivProps { }

export const WorldCuisines = ({ className, ...props }: WorldCuisinesProps) => {

  return (
    <div className={cn(styles.WorldCuisines, className)} {...props}>
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
    </div>
  )
};

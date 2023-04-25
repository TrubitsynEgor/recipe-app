import { DetailsDivProps, IShortRecipeData } from '@/types';
import styles from './VeganPage.module.scss';
import cn from 'classnames'
import { useGetByDietQuery } from '@/store';
import { Card, Container } from '..';
import { Link } from 'react-router-dom';

interface VeganPageProps extends DetailsDivProps { }

export const VeganPage = ({ className, ...props }: VeganPageProps) => {

  const { data = [], isError, isLoading } = useGetByDietQuery('vegan')


  return (
    <div className={cn(styles.VeganPage, className)} {...props}>
      <Container>
        <h1 className={styles.pageTitle}>Vegan Food</h1>
        <ul className={styles.list}>
          {data.results && data.results.map((el: IShortRecipeData) => (
            <li key={el.id}>
              <Link to={`/recipe/${el.id}`}>
                <Card>
                  <img src={el.image} alt="delicios image" />
                  <h3 className={styles.title}>{el.title}</h3>
                </Card>
              </Link>
            </li>
          ))}

        </ul>
      </Container>
    </div>
  )
};

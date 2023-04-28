import { IShortRecipeData } from '@/types';
import styles from './VegetarianPage.module.scss';
import { useGetByDietQuery } from '@/store';
import { Card, Container, ErrorPage, Spinner } from '..';
import { Link } from 'react-router-dom';


export const VegetarianPage = () => {

  const { data = [], isError, isLoading } = useGetByDietQuery('vegetarian')
  if (isLoading) return <Spinner />
  if (isError) return <ErrorPage
    title="Oops, looks like we're having server problems"
    caption='We are already working on this problem' />

  return (
    <Container style={{ paddingTop: '100px' }}>
      <h1 className={styles.pageTitle}>Vegetarian Food</h1>
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
  )
};

import styles from './SearchedRecipes.module.scss';
import { useGetBySearchValueQuery } from '@/store';
import { Link, useParams } from 'react-router-dom';
import { Container, ErrorPage, Spinner } from '..';
import { IShortRecipeData } from '@/types/recipe';


export const SearchedRecipes = () => {
  const params = useParams()
  const { data = [], isError, isLoading } = useGetBySearchValueQuery(params.searched)


  if (isLoading) return <Spinner />

  if (isError || !data.results.length) return <ErrorPage
    title="Oops, I guess we didn't find anything."
    caption='Try entering a different value' />

  return (
    <Container>
      <h1 className={styles.pageTitle}>Is this what you were looking for?</h1>
      <ul className={styles.list}>
        {data.results?.map((el: IShortRecipeData) => (
          <li key={el.id} className={styles.item}>
            <Link to={`/recipe/${el.id}`} className={styles.link}>
              <h3 className={styles.title}>{el.title}</h3>
              <img className={styles.img} src={el.image} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
};

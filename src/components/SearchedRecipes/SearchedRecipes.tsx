import { DetailsDivProps } from '@/types';
import styles from './SearchedRecipes.module.scss';
import cn from 'classnames'
import { useGetBySearchValueQuery } from '@/store';
import { Link, useParams } from 'react-router-dom';
import { Container, ErrorPage } from '..';
import { IShortRecipeData } from '@/types/recipe';

interface SearchedRecipesProps extends DetailsDivProps { }

export const SearchedRecipes = ({ className, ...props }: SearchedRecipesProps) => {
  const params = useParams()
  const { data = [], isError, isLoading } = useGetBySearchValueQuery(params.searched)



  if (isError) return <ErrorPage title="Oops, I guess we didn't find anything." />
  return (
    <div className={cn(styles.searchedRecipes, className)} {...props}>
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
    </div>
  )
};

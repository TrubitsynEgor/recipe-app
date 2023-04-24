import { DetailsUlProps } from '@/types';
import styles from './CountryCuisine.module.scss';
import cn from 'classnames'
import { useGetByCountryNameQuery } from '@/store';
import { Link, useParams } from 'react-router-dom';
import { IRecipeData } from '@/types/recipe';
import { Card, Container } from '..';

interface CountryCuisineProps extends DetailsUlProps { }

export const CountryCuisine = ({ className, ...props }: CountryCuisineProps) => {
  const params = useParams()
  const { data = [], isLoading, isError } = useGetByCountryNameQuery(params.country)
  const result = data.results





  return (
    <Container>
      <h1 className={styles.pageTitle}>{params.country} recipes</h1>
      <ul className={cn(styles.countryCuisine, className)} {...props}>
        {result?.map((el: IRecipeData) => (
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

import { DetailsDivProps, IShortRecipeData } from '@/types';
import styles from './Vegetarian.module.scss';
import cn from 'classnames'
import { useGetByDietQuery } from '@/store';
import { Container, ErrorPage, Spinner } from '..';

interface VegetarianProps extends DetailsDivProps { }

export const Vegetarian = ({ className, ...props }: VegetarianProps) => {
  const { data = [], isError, isLoading } = useGetByDietQuery('vegetarian')
  console.log(data);

  if (isLoading) return <Spinner />
  if (isError) return <ErrorPage
    title="Oops, looks like we're having server problems"
    caption='We are already working on this problem' />

  return (
    <div className={cn(styles.vegetarian, className)} {...props}>
      <Container>
        <h2 className={styles.sectionTitle}>Popular vegetarian dish</h2>
        {data.results?.map((el: IShortRecipeData) => (
          <div className={styles.content} key={el.id}>
            <img src={el.image} alt="delicious food" />
            <div className={styles.caption}>
              <h3>{el.title}</h3>
              <p>
                Vegetarian diets vary in what foods they include and exclude: Lacto-vegetarian diets exclude meat, fish, poultry and eggs, as well as foods that contain them. Dairy products, such as milk, cheese, yogurt and butter, are included. Ovo-vegetarian diets exclude meat, poultry, seafood and dairy products, but allow eggs.
              </p>
            </div>
          </div>
        ))}

      </Container >
    </div >
  )
};

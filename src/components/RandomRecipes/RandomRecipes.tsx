import { useGetRandomQuery } from '@/store';
import styles from './RandomRecipes.module.scss';
import cn from 'classnames'
import { DetailsDivProps } from '@/types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Card } from '../Card/Card';

interface RandomRecipesProps extends DetailsDivProps { }

export const RandomRecipes = ({ className, ...props }: RandomRecipesProps) => {
  const { data = [], isLoading, isError } = useGetRandomQuery()

  if (isLoading) return <h1>Loading...</h1>


  return (
    <div className={cn(styles.randomRecipes, className)} {...props}>
      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '20px',
        autoplay: true,
        type: 'loop'
      }}>
        {data.recipes.map((el: IRecipeData) =>
          <SplideSlide key={el.id}>
            <Card>
              <a href='#' className={styles.title}>{el.title}</a>
              <img className={styles.img} src={el.image} />
              <div className={styles.info}>
                <div className={cn(styles.infoItem, {
                  [styles.gluten]: el.glutenFree
                })}>{el.glutenFree && 'Gluten free'}</div>
                <div className={cn(styles.infoItem, {
                  [styles.vegan]: el.vegan
                })}>{el.vegan ? 'Vegan' : ''}</div>
                <div className={cn(styles.infoItem, {
                  [styles.vegetarian]: el.vegetarian
                })}>{el.vegetarian ? 'Vegetarian' : ''}</div>
              </div>

            </Card>
          </SplideSlide>
        )}

      </Splide>
    </div>
  )
};

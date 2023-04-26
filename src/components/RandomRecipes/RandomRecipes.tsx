import { useGetRandomQuery } from '@/store';
import styles from './RandomRecipes.module.scss';
import cn from 'classnames'
import { IRecipeData } from '@/types';
// @ts-ignore: error message
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Card } from '../UI/Card/Card';
import { Container, ErrorPage, Spinner } from '..';
import { Link } from 'react-router-dom';


export const RandomRecipes = () => {
  const { data = [], isLoading, isError } = useGetRandomQuery('12')


  if (isLoading) return <Spinner />
  if (isError) return <ErrorPage
    title="Oops, looks like we're having server problems"
    caption='We are already working on this problem' />


  return (
    <div >
      <Container>
        <h1 className={styles.mainTitle}>Random recipes for you</h1>

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
                <Link to={`/recipe/${el.id}`} className={styles.title}>{el.title}</Link>
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
      </Container>
    </div>
  )
};

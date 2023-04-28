import { DetailsDivProps } from '@/types';
import styles from './DetailsRecipe.module.scss';
import cn from 'classnames'
import { AppDispatch, RootState, useGetByIdQuery } from '@/store';
import { useParams } from 'react-router-dom';
import { Button, Container, ErrorPage, Spinner } from '..';
import { Ingredients } from '@/types/recipe';
import { useState } from 'react';
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToFavorite, deleteFavorite } from '@/store/favoriteSlice';


export const DetailsRecipe = ({ className, ...props }: DetailsDivProps) => {
  const [tabs, setTabs] = useState(false)
  const params = useParams()
  const { data = [], isError, isLoading } = useGetByIdQuery(params.id)
  const dispatch = useDispatch<AppDispatch>()
  const { recipes } = useSelector((state: RootState) => state.favorite)
  const isFavorite = recipes.some(el => el.id === data.id)
  const [isActive, setIsActive] = useState(isFavorite)

  const handleFavorite = (id: number) => {
    setIsActive(prev => !prev)
    if (!isActive) dispatch(addProductToFavorite(id))
    if (isActive) dispatch(deleteFavorite(id))
  }

  if (isLoading) return <Spinner />
  if (isError) return <ErrorPage
    title="Oops, looks like we're having server problems"
    caption='We are already working on this problem' />

  return (
    <div className={cn(styles.detailsRecipe, className)} {...props}>
      <Container>
        <h1 className={styles.pageTitle}>{data.title}</h1>

        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            <img className={styles.image} src={data.image} alt="delicious food" />
            <div className={styles.tags}>
              {data.glutenFree && <span className={cn(styles.tagsGluten, styles.tagsItem)}>Gluten free</span>}
              {data.vegan && <span className={cn(styles.tagsVegan, styles.tagsItem)}>Vegan</span>}
              {data.vegetarian && <span className={cn(styles.tagsVegetarian, styles.tagsItem)}>Vegetarian</span>}
            </div>
            <Button onClick={() => handleFavorite(data.id)} className={cn(styles.favoriteBtn, {
              [styles.active]: isActive
            })}>
              <BsFillBookmarkHeartFill />
            </Button>
          </div>

          <div className={styles.descrWrapper}>

            <div className={styles.btns}>
              <Button className={cn({
                [styles.active]: tabs
              })} onClick={() => setTabs(true)}>Instructions</Button>
              <Button className={cn({
                [styles.active]: !tabs
              })} onClick={() => setTabs(false)}>Ingredients</Button>
            </div>
            {tabs ? <div className={styles.instructions} dangerouslySetInnerHTML={{ __html: data.instructions }}></div>

              : <ul className={styles.list}>
                {data.extendedIngredients?.map((el: Ingredients, idx: number) => (
                  <li className={styles.item} key={idx}>
                    <h4 className={styles.ingrTitle}>{el.name}</h4>
                    <p className={styles.ingrDescr}>{el.original}</p>
                  </li>
                ))}
              </ul>}
          </div>
        </div>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: data.summary }}></p>


      </Container>
    </div>
  )
};

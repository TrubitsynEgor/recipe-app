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
import { motion } from 'framer-motion'

export const DetailsRecipe = ({ className, ...props }: DetailsDivProps) => {
  const [tabs, setTabs] = useState(false)
  const params = useParams()
  const { data = [], isError, isLoading } = useGetByIdQuery(params.id)
  const dispatch = useDispatch<AppDispatch>()
  const { recipes } = useSelector((state: RootState) => state.favorite)
  const isFavorite = recipes.some(el => el.id === data.id)
  const [isActive, setIsActive] = useState(isFavorite)

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4 }
    })
  };

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
        <motion.h1 variants={variants} initial='hidden' animate='visible' custom={1} className={styles.pageTitle}>{data.title}</motion.h1>

        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            <motion.img variants={variants} initial='hidden' animate='visible' custom={1} className={styles.image} src={data.image} alt="delicious food" />
            <motion.div variants={variants} initial='hidden' animate='visible' custom={1.5} className={styles.tags}>
              {data.glutenFree && <span className={cn(styles.tagsGluten, styles.tagsItem)}>Gluten free</span>}
              {data.vegan && <span className={cn(styles.tagsVegan, styles.tagsItem)}>Vegan</span>}
              {data.vegetarian && <span className={cn(styles.tagsVegetarian, styles.tagsItem)}>Vegetarian</span>}
            </motion.div>
            <Button aria-label={`add or remove favorite recipe, this recipe is ${isActive ? 'favorite' : 'not favorite'}`} onClick={() => handleFavorite(data.id)} className={cn(styles.favoriteBtn, {
              [styles.active]: isActive
            })}>
              <BsFillBookmarkHeartFill />
            </Button>
          </div>

          <motion.div className={styles.descrWrapper} variants={variants} initial='hidden' animate='visible' custom={2}>

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
          </motion.div>
        </div>
        <motion.p variants={variants} initial='hidden' animate='visible' custom={2.5}
          className={styles.description} dangerouslySetInnerHTML={{ __html: data.summary }}></motion.p>


      </Container>
    </div>
  )
};

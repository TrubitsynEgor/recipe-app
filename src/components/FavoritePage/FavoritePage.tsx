import { DetailsDivProps, IRecipeData } from '@/types';
import styles from './FavoritePage.module.scss';
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { Link } from 'react-router-dom';
import { Button, Container, Empty } from '..';
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { deleteFavorite } from '@/store/favoriteSlice';


export const FavoritePage = ({ className, ...props }: DetailsDivProps) => {

  const { recipes } = useSelector((state: RootState) => state.favorite)
  const dispatch = useDispatch<AppDispatch>()

  const deleteFavoriteRecipe = (id: number) => {
    dispatch(deleteFavorite(id))
  }

  if (recipes.length === 0) return <Empty />

  return (
    <div className={cn(styles.favoritePage, className)} {...props}>
      <Container>
        <h1 className={styles.pageTitle}>Your favorite recipes</h1>
        <ul className={styles.list}>
          {recipes && recipes.map((el: IRecipeData) => (
            <li className={styles.item} key={el.id}>
              <Link to={`/recipe/${el.id}`} className={styles.title}>{el.title}</Link>
              <div className={styles.right}>
                <img src={el.image} alt="delicious food" />
                <div className={styles.tags}>
                  {el.glutenFree && <span className={cn(styles.tagsGluten, styles.tagsItem)}>Gluten free</span>}
                  {el.vegan && <span className={cn(styles.tagsVegan, styles.tagsItem)}>Vegan</span>}
                  {el.vegetarian && <span className={cn(styles.tagsVegetarian, styles.tagsItem)}>Vegetarian</span>}
                </div>
                <Button onClick={() => deleteFavoriteRecipe(el.id)} className={styles.btn}>
                  <RiDeleteBin5Fill />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
};

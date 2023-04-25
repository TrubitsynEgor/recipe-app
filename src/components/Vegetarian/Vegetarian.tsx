import { DetailsDivProps, IShortRecipeData } from '@/types';
import styles from './Vegetarian.module.scss';
import cn from 'classnames'
import VegetarianIMG from './vegetarian.jpg'
import { Container, ErrorPage, Spinner } from '..';

interface VegetarianProps extends DetailsDivProps { }

export const Vegetarian = ({ className, ...props }: VegetarianProps) => {


  return (
    <div className={cn(styles.vegetarian, className)} {...props}>
      <Container>
        <h2 className={styles.sectionTitle}>About vegetarian diet</h2>
        <div className={styles.content}>
          <img src={VegetarianIMG} alt="delicious food" />
          <div className={styles.caption}>
            <p>
              Vegetarian diets vary in what foods they include and exclude: Lacto-vegetarian diets exclude meat, fish, poultry and eggs, as well as foods that contain them. Dairy products, such as milk, cheese, yogurt and butter, are included. Ovo-vegetarian diets exclude meat, poultry, seafood and dairy products, but allow eggs.
            </p>
          </div>
        </div>


      </Container >
    </div >
  )
};

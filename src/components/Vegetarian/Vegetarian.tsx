import styles from './Vegetarian.module.scss';
import VegetarianIMG from './vegetarian.jpg'
import { Container } from '..';
import { motion } from 'framer-motion'

export const Vegetarian = () => {

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }
  };

  return (
    <motion.div variants={variants} initial='hidden' animate='visible' className={styles.vegetarian}>
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
    </motion.div >
  )
};

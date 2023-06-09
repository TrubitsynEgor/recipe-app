import styles from './Vegan.module.scss';
import { Container } from '..';
import VeganImg from './vegan.jpg'
import { motion } from 'framer-motion'

export const Vegan = () => {

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 3 } }
  };

  return (
    <motion.div variants={variants} initial='hidden' animate='visible' className={styles.vegan}>
      <Container>
        <h2 className={styles.sectionTitle}>What about the vegan diet?</h2>
        <div className={styles.content}>
          <div className={styles.caption}>
            <p>
              Vegan diets are made up of only plant-based foods. This type of diet includes fruits, vegetables, soy, legumes, nuts and nut butters, plant-based dairy alternatives, sprouted or fermented plant foods and whole grains. Vegan diets don’t include animal foods like eggs, dairy, meat, poultry or seafood. They also are devoid of animal byproducts such as honey (made by bees) and lesser-known animal-based ingredients like whey, casein, lactose, egg white albumen, gelatin, carmine, shellac, animal-derived vitamin D3 and fish-derived omega-3 fatty acids.
            </p>
          </div>
          <img src={VeganImg} alt="delicious food" />
        </div>

      </Container>
    </motion.div>
  )
};

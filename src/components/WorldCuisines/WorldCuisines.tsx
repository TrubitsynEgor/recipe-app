import styles from './WorldCuisines.module.scss';
import { MContainer, cuisines } from '..';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export const WorldCuisines = () => {


  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.6 }
    })
  };


  return (
    <MContainer style={{ paddingTop: '100px' }}>
      <h1>Recipes from around the world</h1>
      <ul className={styles.list}>
        {cuisines.map((el, idx) => (
          <motion.li variants={variants} initial='hidden' animate='visible' custom={idx}
            key={el.title} className={styles.item}>
            <Link to={el.title.toLowerCase()}>
              <span>{el.title}</span>
              {el.image}
            </Link>
            <div className={styles.descr}>
              {el.description}
            </div>
          </motion.li>
        ))}
      </ul>
    </MContainer>
  )
};

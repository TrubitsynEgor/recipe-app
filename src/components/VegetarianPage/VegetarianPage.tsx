import { IShortRecipeData } from '@/types';
import styles from './VegetarianPage.module.scss';
import { useGetByDietQuery } from '@/store';
import { Card, Container, ErrorPage, Spinner } from '..';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export const VegetarianPage = () => {

  const variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 }
    })
  };

  const { data = [], isError, isLoading } = useGetByDietQuery('vegetarian')
  if (isLoading) return <Spinner />
  if (isError) return <ErrorPage
    title="Oops, looks like we're having server problems"
    caption='We are already working on this problem' />

  return (
    <Container style={{ paddingTop: '100px' }}>
      <h1 className={styles.pageTitle}>Vegetarian Food</h1>
      <ul className={styles.list}>
        {data.results && data.results.map((el: IShortRecipeData, idx: number) => (
          <motion.li key={el.id} variants={variants} initial='hidden' animate='visible' custom={idx}>
            <Link to={`/recipe/${el.id}`}>
              <Card>
                <img src={el.image} alt="delicios image" />
                <h3 className={styles.title}>{el.title}</h3>
              </Card>
            </Link>
          </motion.li>
        ))}

      </ul>
    </Container>
  )
};

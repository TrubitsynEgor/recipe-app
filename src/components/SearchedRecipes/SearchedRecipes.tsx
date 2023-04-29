import styles from './SearchedRecipes.module.scss';
import { useGetBySearchValueQuery } from '@/store';
import { Link, useParams } from 'react-router-dom';
import { Card, Container, ErrorPage, Spinner } from '..';
import { IShortRecipeData } from '@/types/recipe';
import { motion } from 'framer-motion'

export const SearchedRecipes = () => {
  const params = useParams()
  const { data = [], isError, isLoading } = useGetBySearchValueQuery(params.searched)

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 }
    })
  };

  if (isLoading) return <Spinner />

  if (isError || !data.results.length) return <ErrorPage
    title="Oops, I guess we didn't find anything."
    caption='Try entering a different value' />

  return (
    <Container>
      <h1 className={styles.pageTitle}>Is this what you were looking for?</h1>
      <ul className={styles.list}>
        {data.results?.map((el: IShortRecipeData, idx: number) => (
          <motion.li key={el.id} className={styles.item} variants={variants} initial='hidden' animate='visible' custom={idx}>
            <Card>
              <Link to={`/recipe/${el.id}`} className={styles.link}>
                <h3 className={styles.title}>{el.title}</h3>
                <img className={styles.img} src={el.image} alt="" />
              </Link>
            </Card>
          </motion.li>
        ))}
      </ul>
    </Container>
  )
};

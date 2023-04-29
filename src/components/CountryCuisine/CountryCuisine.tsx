import { DetailsUlProps } from '@/types';
import styles from './CountryCuisine.module.scss';
import cn from 'classnames'
import { useGetByCountryNameQuery } from '@/store';
import { Link, useParams } from 'react-router-dom';
import { IRecipeData } from '@/types/recipe';
import { Card, Container, ErrorPage, Spinner } from '..';
import { motion } from 'framer-motion'

export const CountryCuisine = ({ className, ...props }: DetailsUlProps) => {
  const params = useParams()
  const { data = [], isLoading, isError } = useGetByCountryNameQuery(params.country)
  const result = data.results

  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.3 }
    })
  };



  if (isLoading) return <Spinner />
  if (isError || !result.length) return <ErrorPage
    title="Oops, looks like we're having server problems"
    caption='We are already working on this problem' />
  return (
    <Container className={styles.wrapper}>
      <h1 className={styles.pageTitle}>{params.country} recipes</h1>
      <ul className={cn(styles.countryCuisine, className)} {...props}>
        {result?.map((el: IRecipeData, idx: number) => (
          <motion.li variants={variants} initial='hidden' animate='visible' custom={idx} key={el.id}>
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

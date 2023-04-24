import { DetailsDivProps, IShortRecipeData } from '@/types';
import styles from './Vegan.module.scss';
import cn from 'classnames'
import { useGetRandomVeganQuery } from '@/store';
import { Container, ErrorPage, Spinner } from '..';

interface VeganProps extends DetailsDivProps { }

export const Vegan = ({ className, ...props }: VeganProps) => {
  const { data = [], isError, isLoading } = useGetRandomVeganQuery()
  console.log(data);

  if (isLoading) return <Spinner />
  if (isError) return <ErrorPage
    title="Oops, looks like we're having server problems"
    caption='We are already working on this problem' />

  return (
    <div className={cn(styles.Vegan, className)} {...props}>
      <Container>
        <h2 className={styles.sectionTitle}>Popular Vegan dish</h2>
        {data.results?.map((el: IShortRecipeData) => (
          <div key={el.id} className={styles.content}>
            <div className={styles.caption}>
              <h3>{el.title}</h3>
              <p>
                Vegan diets are made up of only plant-based foods. This type of diet includes fruits, vegetables, soy, legumes, nuts and nut butters, plant-based dairy alternatives, sprouted or fermented plant foods and whole grains. Vegan diets don’t include animal foods like eggs, dairy, meat, poultry or seafood. They also are devoid of animal byproducts such as honey (made by bees) and lesser-known animal-based ingredients like whey, casein, lactose, egg white albumen, gelatin, carmine, shellac, animal-derived vitamin D3 and fish-derived omega-3 fatty acids.
              </p>
            </div>
            <img src={el.image} alt="delicious food" />
          </div>
        ))}

      </Container>
    </div>
  )
};

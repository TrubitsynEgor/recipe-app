import { DetailsDivProps } from '@/types';
import styles from './DetailsRecipe.module.scss';
import cn from 'classnames'

interface DetailsRecipeProps extends DetailsDivProps { }

export const DetailsRecipe = ({ className, ...props }: DetailsRecipeProps) => {

  return (
    <div className={cn(styles.detailsRecipe, className)} {...props}>

    </div>
  )
};

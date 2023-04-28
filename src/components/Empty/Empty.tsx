import { DetailsDivProps } from '@/types';
import styles from './Empty.module.scss';
import cn from 'classnames'
import EmptyImg from './emty.jpg'


export const Empty = ({ className, ...props }: DetailsDivProps) => {

  return (
    <div className={cn(styles.empty, className)} {...props}>
      <h2>There's nothing here yet.</h2>
      <img src={EmptyImg} alt="Empty image" />
      <h2>Add the recipe by clicking on the favorite button</h2>
    </div>
  )
};

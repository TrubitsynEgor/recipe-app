import { DetailsDivProps } from '@/types';
import styles from './Card.module.scss';
import cn from 'classnames'


export const Card = ({ children, className, ...props }: DetailsDivProps) => {

  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  )
};

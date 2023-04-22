import { DetailsDivProps } from '@/types';
import styles from './Card.module.scss';
import cn from 'classnames'

interface CardProps extends DetailsDivProps { }

export const Card = ({ children, className, ...props }: CardProps) => {

  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  )
};

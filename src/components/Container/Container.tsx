import { DetailsDivProps } from '@/types';
import styles from './Container.module.scss';
import cn from 'classnames'



export const Container = ({ children, className, ...props }: DetailsDivProps) => {

  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  )
};

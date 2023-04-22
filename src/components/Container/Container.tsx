import { DetailsDivProps } from '@/types';
import styles from './Container.module.scss';
import cn from 'classnames'

interface ContainerProps extends DetailsDivProps { }

export const Container = ({ children, className, ...props }: ContainerProps) => {

  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  )
};

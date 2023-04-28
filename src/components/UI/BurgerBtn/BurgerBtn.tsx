import { DetailsBtnProps } from '@/types';
import styles from './BurgerBtn.module.scss';
import cn from 'classnames'

interface BurgerBtnProps extends DetailsBtnProps {
  onClick: () => void
}

export const BurgerBtn = ({ onClick, children, className, ...props }: BurgerBtnProps) => {

  return (
    <button onClick={onClick} className={cn(styles.burgerBtn, className)} {...props}>
      {children}
    </button>
  )
};

import { DetailsBtnProps } from '@/types';
import styles from './Button.module.scss';
import cn from 'classnames'

interface ButtonProps extends DetailsBtnProps {
  size?: 'small' | 'medium' | 'large'
  color?: 'blue' | 'light' | 'dark'
}

export const Button = ({ color = 'blue', size = 'medium', children, className, ...props }: ButtonProps) => {

  return (
    <button className={cn(styles.button, className, {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
      [styles.blue]: color === 'blue',
      [styles.light]: color === 'light',
      [styles.dark]: color === 'dark',
    })}
      {...props}
    >
      {children}
    </button>
  )
};

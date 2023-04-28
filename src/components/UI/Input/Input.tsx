import { DetailsInputProps } from '@/types';
import styles from './Input.module.scss';
import cn from 'classnames'



export const Input = ({ name = '', children, className, ...props }: DetailsInputProps) => {

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={cn(styles.label, className)}>{children}</label>
      <input name={name} id={name} className={cn(styles.input, className)} {...props} />
    </div>
  )
};

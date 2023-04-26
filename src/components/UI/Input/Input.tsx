import { DetailsInputProps } from '@/types';
import styles from './Input.module.scss';
import cn from 'classnames'


export const Input = ({ name, children, className, ...props }: DetailsInputProps) => {

  return (
    <div>
      <label htmlFor={name} className={cn(styles.label, className)}>{children}</label>
      <input id={name} className={cn(styles.input, className)} {...props} />
    </div>
  )
};

import { DetailsInputProps } from '@/types';
import styles from './Input.module.scss';
import cn from 'classnames'

interface InputProps extends DetailsInputProps { }

export const Input = ({ name, children, className, ...props }: InputProps) => {

  return (
    <div>
      <label htmlFor={name} className={cn(styles.label, className)}>{children}</label>
      <input id={name} className={cn(styles.input, className)} {...props} />
    </div>
  )
};

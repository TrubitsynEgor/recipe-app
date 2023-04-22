import { DetailsDivProps } from '@/types';
import styles from './Logo.module.scss';
import cn from 'classnames'

interface LogoProps extends DetailsDivProps { }

export const Logo = ({ className, ...props }: LogoProps) => {

  return (
    <div className={cn(styles.logo, className)} {...props}>
      <a href="#">
        <img src="public/images/logo.png" alt="Logo" aria-label='Logo' />
        <span>Find recipe app</span>
      </a>
    </div>
  )
};

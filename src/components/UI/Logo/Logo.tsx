import { DetailsDivProps } from '@/types';
import styles from './Logo.module.scss';
import cn from 'classnames'
import { Link } from 'react-router-dom';

interface LogoProps extends DetailsDivProps { }

export const Logo = ({ className, ...props }: LogoProps) => {

  return (
    <div className={cn(styles.logo, className)} {...props}>
      <Link to="/">
        <img src="public/images/logo.png" alt="Logo" aria-label='Logo' />
        <span>Find recipe app</span>
      </Link>
    </div>
  )
};

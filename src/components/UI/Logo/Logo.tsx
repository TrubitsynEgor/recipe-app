import { DetailsDivProps } from '@/types';
import styles from './Logo.module.scss';
import cn from 'classnames'
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from './Logo.svg';


export const Logo = ({ className, ...props }: DetailsDivProps) => {

  return (
    <div className={cn(styles.logo, className)} {...props}>
      <Link to="/" aria-label='Logo link to home page'>
        <LogoSVG />
        <span>Find recipe app</span>
      </Link>
    </div>
  )
};

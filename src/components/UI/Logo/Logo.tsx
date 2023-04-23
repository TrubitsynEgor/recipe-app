import { DetailsDivProps } from '@/types';
import styles from './Logo.module.scss';
import cn from 'classnames'
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from './Logo.svg';

interface LogoProps extends DetailsDivProps { }

export const Logo = ({ className, ...props }: LogoProps) => {

  return (
    <div className={cn(styles.logo, className)} {...props}>
      <Link to="/">
        <LogoSVG />
        <span>Find recipe app</span>
      </Link>
    </div>
  )
};

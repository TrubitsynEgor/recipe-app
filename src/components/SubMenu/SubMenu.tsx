import { DetailsUlProps } from '@/types';
import styles from './SubMenu.module.scss';
import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom';

type Cuisines = { title: string, image: JSX.Element }
interface SubMenuProps extends DetailsUlProps {
  cuisines: Cuisines[]
}

export const SubMenu = ({ cuisines, className, ...props }: SubMenuProps) => {
  const location = useLocation()
  return (
    <ul className={cn(styles.subMenu, className)} {...props}>
      {cuisines.map(el => (
        <li key={el.title}>
          <Link to={`/cuisines/${el.title.toLowerCase()}`}
            className={cn(styles.link, {
              [styles.active]: el.title.toLowerCase() === location.pathname
            })}
          >
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  )
};

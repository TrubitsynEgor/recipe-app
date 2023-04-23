import { DetailsUlProps } from '@/types';
import styles from './SubMenu.module.scss';
import cn from 'classnames'
import { Link } from 'react-router-dom';

type Cuisines = { title: string, image: JSX.Element }
interface SubMenuProps extends DetailsUlProps {
  cuisines: Cuisines[]
}

export const SubMenu = ({ cuisines, className, ...props }: SubMenuProps) => {

  return (
    <ul className={cn(styles.subMenu, className)} {...props}>
      {cuisines.map(el => (
        <li key={el.title}>
          <Link to={`/cuisines/${el.title.toLowerCase()}`}>{el.title}</Link>
        </li>
      ))}
    </ul>
  )
};

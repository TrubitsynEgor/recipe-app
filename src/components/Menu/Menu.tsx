import { DetailsDivProps } from '@/types';
import styles from './Menu.module.scss';
import cn from 'classnames'

interface MenuProps extends DetailsDivProps { }

export const Menu = ({ className, ...props }: MenuProps) => {

  return (
    <nav className={cn(styles.menu, className)} {...props}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#" className={styles.link}>Link№1</a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.link}>Link№2</a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.link}>Link№3</a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.link}>Link№4</a>
        </li>
        <li className={styles.item}>
          <a href="#" className={styles.link}>Link№5</a>
        </li>
      </ul>
    </nav>
  )
};

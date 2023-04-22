import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { Container } from '../Container/Container';
import { AuthPanel, Input, Logo, Menu } from '..';
import { AiOutlineFileSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react';

interface HeaderProps extends DetailsDivProps { }

export const Header = ({ className, ...props }: HeaderProps) => {
  const [favoritesCount, setFavoritesCount] = useState(0)

  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={styles.container}>
        <Logo />
        <Menu className={styles.menu} />

        <div className={styles.searchInput}>
          <Input className={styles.input} placeholder='What are you looking for?' />
          <AiOutlineFileSearch className={styles.img} />
        </div>

        <a href='#' className={styles.favorites}>
          <AiOutlineHeart />
          {favoritesCount > 0 && <span>{favoritesCount}</span>}
        </a>

        <AuthPanel />

      </Container>
    </header>
  )
};

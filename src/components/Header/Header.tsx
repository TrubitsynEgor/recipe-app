import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { Container } from '../Container/Container';
import { AuthPanel, Input, Logo, Menu } from '..';
import { AiOutlineFileSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FormEvent, useEffect, useState } from 'react';
import { ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetBySearchValueQuery } from '@/store';

interface HeaderProps extends DetailsDivProps { }

export const Header = ({ className, ...props }: HeaderProps) => {
  const [favoritesCount, setFavoritesCount] = useState(0)
  const [value, setValue] = useState('')

  const navigate = useNavigate()


  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value) navigate(`/search/${value}`)
  }


  return (
    <header className={cn(styles.header, className)} {...props}>
      <Container className={styles.container}>
        <Logo />
        <Menu className={styles.menu} />

        <form onSubmit={handleChange} className={styles.searchInput}>
          <Input value={value} onChange={e => setValue(e.target.value)} className={styles.input} placeholder='What are you looking for?' />
          <AiOutlineFileSearch className={styles.img} />
        </form>

        <a href='#' className={styles.favorites}>
          <AiOutlineHeart />
          {favoritesCount > 0 && <span>{favoritesCount}</span>}
        </a>

        <AuthPanel />

      </Container>
    </header>
  )
};

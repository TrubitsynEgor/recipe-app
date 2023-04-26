import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { Container } from '../Container/Container';
import { AuthPanel, Input, Logo, Menu } from '..';
import { AiOutlineFileSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FormEvent, useEffect, useState } from 'react';
import { ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RootState, useGetBySearchValueQuery } from '@/store';
import { useSelector } from 'react-redux';

interface HeaderProps extends DetailsDivProps { }

export const Header = ({ className, ...props }: HeaderProps) => {
  const { count } = useSelector((data: RootState) => data.favorite)
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
          <Input value={value} onChange={e => setValue(e.target.value)} className={styles.input} placeholder='Enter a dish or ingredients' />
          <AiOutlineFileSearch className={styles.img} />
        </form>

        <Link to='/favorite' className={styles.favorites}>
          <AiOutlineHeart />
          {count > 0 && <span>{count}</span>}
        </Link>

        <AuthPanel />

      </Container>
    </header>
  )
};

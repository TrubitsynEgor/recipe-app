import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { Container } from '../Container/Container';
import { AuthPanel, BurgerBtn, Input, Logo, Menu } from '..';
import { AiOutlineFileSearch } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

export const Header = ({ className, ...props }: DetailsDivProps) => {
  const { count } = useSelector((data: RootState) => data.favorite)
  const [value, setValue] = useState('')
  const [menuIsOpen, setMenuOpen] = useState(false)
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

        <AuthPanel className={styles.authPanel} />

        <div className={styles.burgerBtnWrapper}>
          {!menuIsOpen && <BurgerBtn onClick={() => setMenuOpen(true)}><RiMenu3Line /></BurgerBtn>}
          {menuIsOpen && <BurgerBtn onClick={() => setMenuOpen(false)}><RiCloseLine /></BurgerBtn>}
        </div>


        <div className={cn(styles.mobileMenuWrapper, {
          [styles.open]: menuIsOpen
        })}>

          <Link to='/favorite' className={cn(styles.favoritesMobile, styles.favorites)}>
            <AiOutlineHeart />
            {count > 0 && <span>{count}</span>}
          </Link>

          <form onSubmit={handleChange} className={cn(styles.mobileSearch, styles.searchInput)}>
            <Input value={value} onChange={e => setValue(e.target.value)} className={styles.input} placeholder='Enter a dish or ingredients' />
            <AiOutlineFileSearch className={styles.img} />
          </form>

          <Menu className={styles.mobileMenu} />

        </div>
      </Container>
    </header>
  )
};

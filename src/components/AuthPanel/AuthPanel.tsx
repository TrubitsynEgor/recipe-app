import { DetailsDivProps } from '@/types';
import styles from './AuthPanel.module.scss';
import cn from 'classnames'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { ImExit } from 'react-icons/im'
import { Button } from '..';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { loginOut } from '@/store/authSlice';




export const AuthPanel = ({ className, ...props }: DetailsDivProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const { isAuth, email } = useAuth()
  const userName = email?.split('@')[0]

  const logOut = () => {
    dispatch(loginOut())
  }
  return (
    <div className={cn(styles.authPanel, className)} {...props}>
      <Link to='/authorization'>
        {!isAuth ? <span>Log in</span> : <span aria-label='go to profile page'>{userName}</span>}
        <BiUser />
      </Link >
      {isAuth && <Button onClick={logOut} aria-label='log out' className={styles.exit}><ImExit /></Button>}
    </div>
  )
};

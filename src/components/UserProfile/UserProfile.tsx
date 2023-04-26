import { DetailsDivProps } from '@/types';
import styles from './UserProfile.module.scss';
import cn from 'classnames'
import { Container } from '..';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserProfileProps extends DetailsDivProps { }

export const UserProfile = ({ className, ...props }: UserProfileProps) => {
  const { isAuth, email } = useAuth()
  const userName = email?.split("@")[0]
  const navigate = useNavigate()

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!isAuth) navigate('/')
    }, 200);

    return () => {
      clearTimeout(debounce)
    }
  }, [isAuth])


  return (
    <div className={cn(styles.userProfile, className)} {...props}>
      <Container>
        <h1>Welcome!  {userName}</h1>
      </Container>
    </div>
  )
};

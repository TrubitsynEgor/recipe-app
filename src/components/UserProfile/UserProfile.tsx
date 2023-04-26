import { Container, UserForm } from '..';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const UserProfile = () => {
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
    <Container>
      <h1>Welcome!  {userName}</h1>
      <UserForm />
    </Container>
  )
};

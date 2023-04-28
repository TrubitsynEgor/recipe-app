import { Container, Form } from '..';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { loginIn } from '@/store/authSlice';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss'

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [error, setError] = useState(false)
  const { isAuth } = useAuth()
  const navigate = useNavigate();


  const submitAuthData = (email: string, password: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginIn({
          id: user.uid,
          email: user.email,
          isAuth: !!user.uid
        }))
        navigate('/profile')

      })
      .catch(() => setError(true))
  }

  useEffect(() => {
    if (isAuth) navigate('/profile')
  }, [])


  return (
    <Container className={styles.loginForm}>
      <Form link='register' serverError={error} title='Login in' submitAuthData={submitAuthData} />
    </Container>
  )
};

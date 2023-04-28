import { Container, Form } from '..';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { loginIn } from '@/store/authSlice';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';


export const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [error, setError] = useState(false)
  const { isAuth } = useAuth()
  const navigate = useNavigate();


  const submitAuthData = (email: string, password: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
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

    const debounce = setTimeout(() => {
      if (isAuth) navigate('/profile')
    }, 200);

    return () => {
      clearTimeout(debounce)
    }
  }, [isAuth])

  return (
    <Container>
      <Form serverError={error} link='authorization' title='Register' submitAuthData={submitAuthData} />
    </Container>
  )
};
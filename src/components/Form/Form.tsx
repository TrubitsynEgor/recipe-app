import { DetailsFormProps } from '@/types';
import styles from './Form.module.scss';
import cn from 'classnames'
import { Button, Input } from '..';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

interface FormProps extends DetailsFormProps {
  title: string
  submitAuthData: (email: string, password: string) => void
  error?: boolean
  link: string
}

export const Form = ({ link, error, submitAuthData, title, onSubmit, className, ...props }: FormProps) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuthSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitAuthData(email, password)
  }


  return (
    <form onSubmit={handleAuthSubmit} className={cn(styles.form, className)} {...props}>
      <h2>{title}</h2>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} type='text' placeholder='Enter your email...'>Email</Input>
      <Input value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} type='text' placeholder='Enter your phone...'>Phone</Input>
      <Button>{title}</Button>
      <Link className={styles.link} to={`/${link}`}>or {link}</Link>
      {error && <p className={styles.error}>User is not defined</p>}
    </form>
  )
};

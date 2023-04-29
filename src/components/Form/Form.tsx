import { DetailsFormProps } from '@/types';
import styles from './Form.module.scss';
import cn from 'classnames'
import { Button, Input } from '..';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';



interface FormProps extends DetailsFormProps {
  title: string
  submitAuthData: (email: string, password: string) => void
  serverError?: boolean
  link: string
}
type FormValuesType = {
  email: string
  password: string
}

export const Form = ({ link, serverError, submitAuthData, title, onSubmit, className, ...props }: FormProps) => {

  const { handleSubmit, control, formState: { errors } } = useForm<FormValuesType>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleAuthSubmit = (data: FormValuesType) => {
    if (data) submitAuthData(data.email, data.password)
  }

  return (
    <form onSubmit={handleSubmit(handleAuthSubmit)} className={cn(styles.form, className)} {...props}>
      <h2>{title}</h2>
      <Controller
        control={control}
        name='email'
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email'
          }
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              onChange={onChange}
              value={value}
              className={styles.input}
              placeholder='Enter your email...'
            >
              Email
              {error && <span role='alert' className={styles.error}>{error.message}</span>}
            </Input>

          </>
        )}
      />

      <Controller
        control={control}
        name='password'
        rules={{
          required: true,
          minLength: 6
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <Input
              onChange={onChange}
              value={value}
              className={styles.input}
              placeholder='Enter your password...'
            >
              Password
              {error && <span role='alert' className={cn(styles.error, styles.passError)}>Password is invalid, minimum 6 symbols</span>}
            </Input>

          </>
        )}
      />





      <Button disabled={Object.keys(errors).length ? true : false}
        aria-label={Object.keys(errors).length ? `button ${title} disabled` : `button ${title} active`}
        role='alert'>{title}</Button>
      <Link className={styles.link} to={`/${link}`}>or {link}</Link>
      {serverError && <span role='alert' className={styles.serverError}>User is not defined</span>}


    </form>
  )
};

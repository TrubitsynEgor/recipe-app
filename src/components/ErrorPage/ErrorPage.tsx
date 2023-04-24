import { DetailsDivProps } from '@/types';
import styles from './ErrorPage.module.scss';
import cn from 'classnames'
import { Container } from '..';
import ErrorIMG from './error.jpg'

interface ErrorPageProps extends DetailsDivProps {
  title: string
}

export const ErrorPage = ({ title, className, ...props }: ErrorPageProps) => {

  return (
    <div className={cn(styles.errorPage, className)} {...props}>
      <Container className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <img className={styles.title} src={ErrorIMG} alt="404" />
        <h2 className={styles.subTitle}>Try entering a different value</h2>
      </Container>
    </div>
  )
};

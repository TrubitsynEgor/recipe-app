import { DetailsDivProps } from '@/types';
import styles from './UserForm.module.scss';
import cn from 'classnames'
import { useAuth } from '@/hooks/useAuth';
import { EditInput, EditTextArea } from '..';

interface UserFormProps extends DetailsDivProps { }

export const UserForm = ({ className, ...props }: UserFormProps) => {

  const { email } = useAuth()

  return (
    <form className={styles.form}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.caption}>Mail:</span> {email}
        </li>
        <li className={styles.item}>
          <span className={styles.caption}>Name:</span> <EditInput title='name' />
        </li>
        <li className={styles.item}>
          <span className={styles.caption}>Last name:</span> <EditInput title='Last name' />
        </li>
        <li className={styles.item}>
          <span className={styles.caption}> Company:</span> <EditInput title='Company' />
        </li>
        <li className={styles.item}>
          <span className={styles.caption}>About:</span> <EditTextArea title='>About' />
        </li>

      </ul>
    </form>
  )
};

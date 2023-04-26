import styles from './UserForm.module.scss';
import { useAuth } from '@/hooks/useAuth';
import { EditInput, EditTextArea } from '..';


export const UserForm = () => {

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

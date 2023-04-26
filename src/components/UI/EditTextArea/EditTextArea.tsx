import { DetailsDivProps } from '@/types';
import styles from './EditTextArea.module.scss';
import cn from 'classnames'
import { Button } from '../Button/Button';
import { FaRegEdit } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import { getProfileStorage } from '@/helpers/localeStorage';


export const EditTextArea = ({ title, className, ...props }: DetailsDivProps) => {

  const [value, setValue] = useState(getProfileStorage(title!))
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (title !== undefined) {
      localStorage.setItem(title, JSON.stringify(value))
    }
  }, [value])




  return (
    <div className={cn(styles.editTextArea, className)} {...props}>
      {isVisible
        ? <textarea
          aria-label={`edit info for ${title} here`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setIsVisible(false)}
          onBlur={() => setIsVisible(false)}
          autoFocus
        />
        : <span tabIndex={0} aria-label={`Name ${value}`}>{value} <Button
          aria-label={`edit info for ${title}`}
          className={styles.btn} onClick={() => setIsVisible(true)}>
          <FaRegEdit />
        </Button></span>
      }
    </div>
  )
};

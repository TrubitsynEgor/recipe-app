import { DetailsDivProps } from '@/types';
import styles from './AuthPanel.module.scss';
import cn from 'classnames'
import { BiUser } from 'react-icons/bi'
interface AuthPanelProps extends DetailsDivProps { }

export const AuthPanel = ({ className, ...props }: AuthPanelProps) => {

  return (
    <div className={cn(styles.authPanel, className)} {...props}>
      <a href='#'>
        <span>Log in</span>
        <BiUser />
      </a >
    </div>
  )
};

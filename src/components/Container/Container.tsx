import { DetailsDivProps } from '@/types';
import styles from './Container.module.scss';
import cn from 'classnames'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

export const Container = forwardRef<HTMLDivElement, DetailsDivProps>(({ children, className, ...props }: DetailsDivProps, ref) => {

  return (
    <div ref={ref} className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  )
});


export const MContainer = motion(Container)
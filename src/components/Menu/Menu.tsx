import { DetailsDivProps } from '@/types';
import styles from './Menu.module.scss';
import cn from 'classnames'
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { SubMenu } from '..';

import { US, CN, FR, GR, IN, IT, MX, TH, ES } from 'country-flag-icons/react/3x2'
export const cuisines = [
  { title: 'American', image: <US />, description: 'American cuisine consists of the cooking style and traditional dishes prepared in the United States. It has been significantly influenced by Europeans, indigenous Native Americans, Africans, Asians, Pacific Islanders, and many other cultures and traditions.' },
  { title: 'Chinese', image: <CN />, description: 'According to the cooking styles and regional flavors, Chinese cuisines can be divided into eight Chinse cuisines, which include Sichuan Cuisine, Hunan Cuisine, Shandong Cuisine, Zhejiang Cuisine, Fujian Cuisine, Anhui Cuisine, Cantonese Cuisine, and Jiangsu Cuisine. Each cuisine has its popular dishes.' },
  { title: 'French', image: <	FR />, description: 'Fresh, naturally produced ingredients can always be found in French cuisine. Wine, cheese, olive oil, and seasonal vegetables are just a few staples. Herbs and spices are also important to French cuisine and can contribute a depth of flavor to otherwise subtle dishes.' },
  { title: 'Greek', image: <GR />, description: 'Like other Mediterranean cuisines, Greek food has a reputation for being heart healthy with its heavy use of olive oil, fish, lean meats, vegetables, herbs and grain, although some dishes can be quite rich, like the classic moussaka – a hearty dish made of layers of lamb and eggplant, smothered in béchamel sauce and cheese.' },
  { title: 'Indian', image: <IN />, description: 'Spicy, rich, flavourful and diverse are terms that are frequently used to describe Indian food. All these words are apt in describing Indian cuisine, for it is diverse in variety and taste, and is made up from a wide array of regional cuisines throughout various parts of India.' },
  { title: 'Italian', image: <IT />, description: 'Italian cuisine ranks alongside French cuisine in terms of worldwide fame. Pizza and pasta have become world dishes, which are not only cooked in restaurants, but also by most home cooks. No matter where they grow up in Europe, all children are familiar with Italian dishes, such as pizza Margherita and spaghetti bolognese.' },
  { title: 'Mexican', image: <MX />, description: 'Mexican cuisine consists of the cooking cuisines and traditions of the modern country of Mexico. Its earliest roots lie in Mesoamerican cuisine. Its ingredients and methods begin with the first agricultural communities such as the Olmec and Maya who domesticated maize, created the standard process of nixtamalization, and established their foodways' },
  { title: 'Thai', image: <TH />, description: 'Thai food is known for its enthusiastic use of fresh (rather than dried) herbs and spices. Common flavors in Thai food come from garlic, galangal, coriander/cilantro, lemongrass, shallots, pepper, kaffir lime leaves, shrimp paste, fish sauce, and chilies.' },
  { title: 'Spanish', image: <ES />, description: 'Spanish food reflects the principles of the Mediterranean diet, including lots of fresh fruits and vegetables, olive oil, nuts, seafood, and—of course—wine. It\'s based on simple, seasonal, high- quality, and nutritious ingredients that are often sourced locally. ' },
]


export const Menu = ({ className, ...props }: DetailsDivProps) => {

  const location = useLocation()
  const [onHover, setOnHover] = useState(false)

  const openSubMenu = () => {
    setOnHover(true)
  }

  const closeSubMenu = () => {
    setOnHover(false)
  }

  return (
    <nav className={cn(styles.menu, className)} {...props}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink onMouseEnter={openSubMenu} onMouseLeave={closeSubMenu} to="/cuisines" className={cn(styles.link, {
            [styles.active]: location.pathname === '/cuisines'
          })}>Cuisines</NavLink>
          {onHover && <SubMenu onTouchStart={openSubMenu} onMouseEnter={openSubMenu} onMouseLeave={closeSubMenu} cuisines={cuisines} />}
        </li>
        <li className={styles.item}>
          <NavLink to="/vegetarian" className={cn(styles.link, {
            [styles.active]: location.pathname === '/vegetarian'
          })}>Vegetarian</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/vegan" className={cn(styles.link, {
            [styles.active]: location.pathname === '/vegan'
          })}>Vegan</NavLink>
        </li>

      </ul>
    </nav>
  )
};



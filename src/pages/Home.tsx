import { RandomRecipes } from '@/components';
import { DetailsDivProps } from '@/types';

interface HomeProps extends DetailsDivProps { }

export const Home = ({ className, ...props }: HomeProps) => {

  return (
    <div className={className} {...props}>
      <RandomRecipes />

    </div>
  )
};
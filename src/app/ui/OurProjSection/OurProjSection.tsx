import { FC } from 'react';

import styles from './OurProjSection.module.scss';
import cn from 'classnames';

export interface Props {
  img?: string;
  title: string;
  description: string;
  first: boolean;
}

export const OurProjSection: FC<Props> = ({ img, title, description, first }) => {
  return (
    <div className={styles.root}>
      <div className={styles.imgWrap}>
        <div className={
          cn(
            styles.imgItm,
            first && styles.imgItmF,
            !first && styles.imgItmA
          )}>
          <img className={styles.img} src={img} />
        </div>
      </div>


      <div className={
        cn(
          styles.textWrap,
          first && styles.textWrapF,
          !first && styles.textWrapA
        )}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.description}>
          {description}
        </div>
      </div>
    </div>
  );
};

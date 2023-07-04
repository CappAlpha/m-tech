import { FC } from 'react';

import styles from './OurProjSection.module.scss';
import cn from 'classnames';

export interface Props {
  img?: string;
  title: string;
  description: string;
  first: boolean;
  opened: boolean;
  onClickItm: () => void;
}

export const OurProjSection: FC<Props> = ({ img, title, description, first, opened, onClickItm }) => {

  return (
    <div className={styles.root}>
      <div className={styles.imgWrap}>
        <div className={cn(styles.imgItm, opened && styles.imgItmOpened)}
          onClick={() => onClickItm()}
        >
          <img className={styles.img} src={img} />
        </div>
      </div>

      <div className={cn(styles.textWrap, opened && styles.textWrapOpened)}>
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

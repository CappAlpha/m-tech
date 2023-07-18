import { FC } from 'react';

import styles from './Directions.module.scss';
import { DirectionsSection } from './DirectionsSection';

interface directions {
  title: string;
  description: string
}

interface Props {
  directions: directions[];
  title: string;
}

export const Directions: FC<Props> = ({ title, directions }) => {
  return (
    <div className={styles.root} id='directions'>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        {directions.map(({ title, description }) => (
          <DirectionsSection
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};


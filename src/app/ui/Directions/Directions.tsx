import { FC } from 'react';

import styles from './Directions.module.scss';
import { DirectionsSection } from './DirectionsSection';

interface directionsSection {
  title: string;
  description: string
}

interface Props {
  directionsSection: directionsSection[];
  title: string;
}

export const Directions: FC<Props> = ({ title, directionsSection }) => {
  return (
    <div className={styles.root} id='directions'>
      <div className={styles.title}>{title}</div>

      <div className={styles.wrap}>
        {directionsSection.map(({ title, description }) => (
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


import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './DirectionsSection.module.scss';

interface Props {
  title: string;
  description: string;
}

export const DirectionsSection: FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  );
};

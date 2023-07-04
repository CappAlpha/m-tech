import { FC, useState } from 'react';

import styles from './OurProjBlock.module.scss';
import { OurProjSection } from '../OurProjSection';

export interface Props {
  title: string;
  ourProjContent: Array<({ img?: string, title: string, description: string, first: boolean })>
}

export const OurProjBlock: FC<Props> = ({ title, ourProjContent }) => {

  const [opened, setOpened] = useState(false);

  const closeAfterChange = () => setOpened(true);

  return (
    <div className={styles.root} id='projects'>
      <div className={styles.title}>{title}</div>


      <div className={styles.wrap}>
        {ourProjContent.map(({ img, title, description, first }) => (
          <OurProjSection key={title} img={img} title={title} description={description} first={first} opened={opened} onClickItm={closeAfterChange} />
        ))}
      </div>
    </div>
  );
};
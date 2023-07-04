import { FC, useState } from 'react';

import styles from './Projects.module.scss';
import { Images } from './Images';
import { Info } from './Info'

interface Projects {
  title: string;
  projects: { img: string, title: string, description: string, id: number }[]
}

export const Projects: FC<Projects> = ({ title, projects }) => {

  const [setImage, setsetImage] = useState(projects[0]);

  const onClickImage = (id: number) => {
    setsetImage(projects[id])
  }

  return (
    <div className={styles.root} id='projects'>
      <div className={styles.wrap}>
        <div className={styles.title}>{title}</div>

        <Images images={projects} onClickImage={onClickImage} />
        <Info title={setImage.title} description={setImage.description} />
      </div>
    </div>
  )
}

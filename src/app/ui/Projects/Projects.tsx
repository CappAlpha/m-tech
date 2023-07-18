import { FC, useState } from 'react';

import { Images } from './Images';
import { Info } from './Info'

import styles from './Projects.module.scss';

interface Projects {
  img: string;
  title: string;
  description: string;
  id: number;
}

interface Props {
  title: string;
  projects: Projects[];
}

export const Projects: FC<Props> = ({ title, projects }) => {
  const [project, setProject] = useState(projects[0]);

  const onClickImage = (id: number) => {
    setProject(projects[id])
  }

  return (
    <div className={styles.root} id='projects'>
      <div className={styles.wrap}>
        <div className={styles.title}>{title}</div>

        <Images images={projects} onClickImage={onClickImage} />
        <Info title={project.title} description={project.description} />
      </div>
    </div>
  );
};

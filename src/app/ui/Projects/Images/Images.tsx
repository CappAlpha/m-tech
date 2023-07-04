import { FC, useState } from 'react';
import cn from 'classnames';

import styles from './Images.module.scss';


interface Images {
  images: { img: string, title: string, id: number }[]
  onClickImage: (id: number) => void;
}

export const Images: FC<Images> = ({ images, onClickImage }) => {

  const [appState, changeState] = useState({
    activeObject: images[0],
    objects: images,
  });

  const toggleActive = (id: number) => {
    changeState({ ...appState, activeObject: appState.objects[id] });
  }

  const toggleActiveStyles = (id: number) => {
    if (appState.objects[id] === appState.activeObject) {
      return styles.active;
    } else {
      return styles.imgItm;
    }
  }

  return (
    <div className={styles.root}>
      {images.map(({ img, title, id }) => (
        <div className={styles.imgWrap} onClick={() => onClickImage(id)}>
          <div className={toggleActiveStyles(id)} onClick={() => toggleActive(id)}>
            <img className={styles.img} src={img} />
            <div className={styles.title}>{title}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

import 'swiper/css';
import 'swiper/css/navigation';

import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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

  //commit Project FIXES изменить потом
  const toggleActive = (id: number) => {
    changeState({ ...appState, activeObject: appState.objects[id] });
  };

  const toggleActiveStyles = (id: number) => {
    if (appState.objects[id] === appState.activeObject) {
      return styles.active;
    } else {
      return styles.imgItm;
    }
  };

  return (
    <div className={styles.root}>
      <Swiper breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2.1,
          spaceBetween: 40
        },
        800: {
          slidesPerView: 2.5,
          spaceBetween: 40
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        1800: {
          slidesPerView: 6,
          spaceBetween: 30
        },
      }}
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {images.map(({ img, title, id }) => (
          <SwiperSlide key={id}>
            <div className={styles.imgWrap} onClick={() => onClickImage(id)}>
              <div className={toggleActiveStyles(id)} onClick={() => toggleActive(id)}>

                <img className={styles.img} src={img} />
                <div className={styles.title}>{title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
};

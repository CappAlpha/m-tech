import { FC, useState } from 'react';

import styles from './Images.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
      <Swiper breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
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
      }} navigation={true} modules={[Navigation]} className={styles.swiper}>
        {images.map(({ img, title, id }) => (
          <SwiperSlide>
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
  )
}

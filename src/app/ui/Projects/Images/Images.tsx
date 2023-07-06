import { FC, useState, useEffect } from 'react';

import styles from './Images.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import useDeviceSize from '../../shared/hook/useDeviceSize';

interface Images {
  images: { img: string, title: string, id: number }[]
  onClickImage: (id: number) => void;
}

let numSlides: number;
const SCREEN_SM = 320;
const SCREEN_MD = 600;
const SCREEN_LG = 1024;
const SCREEN_XL = 1300;
const SCREEN_XXL = 1600;
const SCREEN_XXXL = 1800;

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

  const [width] = useDeviceSize();

  const setSlides = (numSlides: number) => {
    if (width >= SCREEN_XXXL) {
      return numSlides = 6;
    }
    if (width >= SCREEN_XXL) {
      return numSlides = 5;
    }
    if (width >= SCREEN_XL) {
      return numSlides = 4;
    }
    if (width >= SCREEN_LG) {
      return numSlides = 3;
    }
    if (width >= SCREEN_MD) {
      return numSlides = 2;
    }
    if (width >= SCREEN_SM) {
      return numSlides = 1;
    }
  };


  return (
    <div className={styles.root}>
      <Swiper slidesPerView={setSlides(numSlides)} spaceBetween={30} navigation={true} modules={[Navigation]} className={styles.Swiper}>
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

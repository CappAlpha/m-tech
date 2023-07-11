import { FC } from 'react';

import styles from './Aware.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

interface Aware {
  img: string;
  description: string;
  id: number;
}

interface Props {
  title: string;
  aware: Aware[];
}

export const Aware: FC<Props> = ({ title, aware }) => {
  return (
    <div className={styles.root} id="aware">
      <div className={styles.title}>{title}</div>

      <Swiper breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1800: {
          slidesPerView: 5,
          spaceBetween: 40
        },
      }} navigation={true} modules={[Navigation]} className={styles.swiper}>
        <div className={styles.awareWrap}>
          {aware.map(({ img, description, id }) => (
            <SwiperSlide>
              <div className={styles.awareContent}>
                <div className={styles.imgWrap}>
                  <img src={img} className={styles.img} />
                </div>
                <div className={styles.description}>{description}</div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

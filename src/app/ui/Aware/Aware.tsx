import { FC } from 'react';

import styles from './Aware.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

interface Aware {
  img: string;
  description: string;
  link: string;
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
          slidesPerView: 2,
          spaceBetween: 30
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        1800: {
          slidesPerView: 5,
          spaceBetween: 40
        },
      }} navigation={true} modules={[Navigation]} className={styles.swiper}>
        <div className={styles.awareWrap}>
          {aware.map(({ img, description, link }) => (
            <SwiperSlide>
              <div className={styles.awareContent}>
                <Link target='blank' href={link}>
                  <div className={styles.imgWrap}>
                    <img src={img} className={styles.img} />
                  </div>
                  <div className={styles.description}>{description}</div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper >
    </div >
  );
};

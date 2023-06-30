import { Tag } from './Tag/Tag';
import styles from './Ticker.module.scss';

const TAGS = ['ответственность', 'честность', 'результат'];
const DURATION = 25000;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration }) => {
  return (
    <div
      className={styles.loopSlider}
      style={{
        '--duration': `${duration}ms`,
      }}
    >
      <div className={styles.inner}>
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

export const Ticker = () => (
  <div className={styles.root}>
    <div className={styles.tagList}>
      <InfiniteLoopSlider duration={random(DURATION - 5000, DURATION + 5000)}>
        {shuffle(TAGS).map((tag) => (
          <Tag text={tag} key={tag} />
        ))}
      </InfiniteLoopSlider>
    </div>
  </div>
);

import { FC } from "react";
import styles from './Tag.module.scss'

interface Props {
  text: string;
}

export const Tag: FC<Props> = ({ text }) => <div className={styles.tag}>{text}</div>;
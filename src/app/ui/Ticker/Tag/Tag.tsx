import { FC } from "react";
import styles from './Tag.module.scss'

interface Props {
  text: string;
}

export const Tag: FC<Props> = ({ text }) => <div className={styles.root}>{text}</div>;
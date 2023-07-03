import { FC } from 'react';

import styles from './Footer.module.scss';
import { Logo } from '../shared/Icon';

export interface Props {
  title: string;
  company: string;
  include: string;
  address: string;
  tel: string;
  fax: string;
  mailTitle: string;
  mail: string;

  data: string;
  linkData: string;
  info: string;
  linkInfo: string;
}

export const Footer: FC<Props> = ({ title, company, include, address, tel, fax, mailTitle, mail, data, linkData, info, linkInfo }) => {
  return (
    <div className={styles.root}>
      <Logo className={styles.logo} />

      <div className={styles.wrap}>
        <div className={styles.left}>
          <div className={styles.title}>{title}</div>
          <div className={styles.company}>{company}</div>
          <div className={styles.include}>{include}</div>
          <div className={styles.address}>{address}</div>
          <div className={styles.tel}>{tel}</div>
          <div className={styles.fax}>{fax}</div>
          <div className={styles.mail}>
            <div>{mailTitle}</div>
            <a className={styles.mailTo} href={`mailto:${mail}`}>{mail}</a>
          </div>
        </div>
        <div className={styles.right}>
          <a href={linkData} className={styles.data}>{data}</a>
          <a href={linkInfo} className={styles.info}>{info}</a>
        </div>
      </div>
    </div >
  );
};

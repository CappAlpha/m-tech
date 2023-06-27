import { FC } from 'react';

import styles from './FooterBlock.module.scss';
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
  map: string;
  linkMap: string;
  policy1: string;
  policy2: string;
}

export const FooterBlock: FC<Props> = ({ title, company, include, address, tel, fax, mailTitle, mail, data, linkData, info, linkInfo, map, linkMap, policy1, policy2 }) => {
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
            <a href={`mailto:${mail}`}>{mail}</a>
          </div>
        </div>
        <div className={styles.right}>
          <a href={linkData} className={styles.data}>{data}</a>
          <a href={linkInfo} className={styles.info}>{info}</a>
          <a href={linkMap} className={styles.map}>{map}</a>
          <div className={styles.policy}>{policy1}</div>
          <div className={styles.policy}>{policy2}</div>
        </div>
      </div>
    </div >
  );
};

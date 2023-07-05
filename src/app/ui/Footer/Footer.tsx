import { FC } from 'react';

import styles from './Footer.module.scss';
import { Logo } from '../shared/Icon';

interface FooterLeft {
  title: string;
  company: string;
  include: string;
  address: string;
  tel: string;
  fax: string;
  mailTitle: string;
  mail: string;
}

interface FooterRight {
  data: string;
  linkData: string;
  info: string;
  linkInfo: string;
}

export interface Props {
  footerLeft: FooterLeft;
  footerRight: FooterRight;
}

export const Footer: FC<Props> = ({ footerLeft, footerRight }) => {
  return (
    <div className={styles.root}>
      <Logo className={styles.logo} />

      <div className={styles.wrap}>
        <div className={styles.left}>
          <div className={styles.title}>{footerLeft.title}</div>
          <div className={styles.company}>{footerLeft.company}</div>
          <div className={styles.include}>{footerLeft.include}</div>
          <div className={styles.address}>{footerLeft.address}</div>
          <div className={styles.tel}>{footerLeft.tel}</div>
          <div className={styles.fax}>{footerLeft.fax}</div>
          <div className={styles.mail}>
            <div>{footerLeft.mailTitle}</div>
            <a className={styles.mailTo} href={`mailto:${footerLeft.mail}`}>{footerLeft.mail}</a>
          </div>
        </div>
        <div className={styles.right}>
          <a href={footerRight.linkData} className={styles.data}>{footerRight.data}</a>
          <a href={footerRight.linkInfo} className={styles.info}>{footerRight.info}</a>
        </div>
      </div>
    </div >
  );
};

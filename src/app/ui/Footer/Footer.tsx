import Link from 'next/link';
import { FC } from 'react';

import { Logo } from '../shared/Icon';

import styles from './Footer.module.scss';
import { getTransformedPhone } from '../shared/constants/getTransformedPhone';

interface FooterLeft {
  company: string;
  include: string;
  address: string;
  phone: string;
  email: string;
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
          <div className={styles.title}>Контакты</div>
          <div className={styles.company}>{footerLeft.company}</div><div className={styles.include}>{footerLeft.include}</div>
          <div className={styles.address}>{footerLeft.address}</div>
          <div className={styles.telWrap}>
            <div className={styles.telText}>Телефон</div>
            <Link href={`tel:${getTransformedPhone(footerLeft.phone)}`} className={styles.tel}>
              {footerLeft.phone} /
            </Link>
          </div>
          <div className={styles.mail}>
            <div>Email</div>
            <a className={styles.mailTo} href={`mailto:${footerLeft.email}`}>
              {footerLeft.email}
            </a>
          </div>
        </div>
        {/* <div className={styles.right}>
          <a href={footerRight.linkData} className={styles.data}>
            {footerRight.data}
          </a>
          <a href={footerRight.linkInfo} className={styles.info}>
            {footerRight.info}
          </a>
        </div> */}
      </div>
    </div >
  );
};

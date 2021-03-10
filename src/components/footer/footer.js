import React from 'react';
import styles from './footer.module.scss';

export default function Footer() {
  const links = [
    {
      logo: 'RSSchool',
      img: '',
      href: 'https://docs.rs.school/#/',
    },
    {
      logo: 'youtube',
      img: '',
      href: 'https://www.youtube.com',
    }
  ];
  return (
    <div className={styles.footer}>
      {links.map((link, index) => {
          return (
            <a href={link.href} key={index} className={styles[link.logo]}>
            </a>
          );
        })}
    </div>
  )
}



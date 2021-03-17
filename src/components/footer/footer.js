import React from 'react';
import './footer.scss';

export default function Footer() {
  const links = [
    {
      style: 'RSSchool',
      href: 'https://docs.rs.school/#/',
    },
    {
      style: 'youtube',
      href: 'https://www.youtube.com',
    },
  ];
  const linksDeveloper = [
    {
      text: 'Tatyana Grigorovich',
      href: 'https://github.com/gtm003',
    },
    {
      text: 'Sasha Sadovskaya',
      href: 'https://github.com/SashaSadovskaya',
    },
    {
      text: 'Roman Govor',
      href: 'https://github.com/RomanGovor',
    },
  ];
  return (
    <div className='footer'>
      <div className='links'>
        {links.map((link, index) => {
          return (
            <a href={link.href} key={index} className={link.style}/>
          );
      })}
      </div>
      <div className='developers'>
        {linksDeveloper.map((link, index) => {
          return (
            <div className='underline' key={index}>
              <a href={link.href}>
                {link.text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  )
}



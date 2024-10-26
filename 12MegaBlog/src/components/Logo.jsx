import React from 'react';
import BlogLogo from '../assets/BlogLogo.svg';

function Logo({ width = '100px' }) {
  return (
    <a className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src={BlogLogo}
        alt="Blog Logo"
        width={width}
        className='h-12'
      />
      <span className="text-2xl font-semibold dark:text-white">Blog</span>
    </a>
  );
}

export default Logo;

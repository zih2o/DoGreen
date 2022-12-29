import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

interface ISvg {
  name: string;
  url: string;
}
function Footer() {
  const svgs:ISvg[] = [
    { name: 'BsFacebook', url: '#' },
    { name: 'BsInstagram', url: '#' },
    { name: 'BsTwitter', url: '#' },
    { name: 'BsGithub', url: '#' },
  ];
  return (
    <footer className="fixed bottom-0 inset-x-0 inset-y-50 p-4 bg-garden3 sm:p-6 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-garden4/80 sm:text-center ">
          © 2022
          <a href="/" className="hover:underline">
            Do Green™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <BsFacebook className='w-5 h-5 fill-garden4/80'/>
          <BsInstagram className='w-5 h-5 fill-garden4/80'/>
          <BsTwitter className='w-5 h-5 fill-garden4/80'/>
          <BsGithub className='w-5 h-5 fill-garden4/80'/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

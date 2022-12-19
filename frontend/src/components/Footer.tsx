import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
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
    <footer className="fixed bottom-0 inset-x-0 inset-y-50 p-4 bg-gardenBG sm:p-6 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022
          <a href="/" className="hover:underline">
            Do Green™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {svgs.map(svg =>(<Link to={svg.url}>Components[svg.name]</Link>))}
          {/* 1. const 로 가지고 있는 array 만들기 => svgs 에 array로 존재
          2. Components[svg] 를 여러개 가지고 있는 변수 만들기(map 활용)
            * 이 동작을 할 때 React.createElement(svgComponent, {}); 를 해줘야함
          3. 여러개를 가지고 있는 변수안에 담긴 array를 아래 구문을 통해서 html element로 바꿔주기
          const svgComponent = Components[type];
          React.createElement(svgComponent, {});
          * 1개의 object 안에 name, url 존재
          ** 위에서 Components[name] 을 가지게 만들기 */}


          <BsFacebook className='w-5 h-5 fill-gray-500/100'/>
          <BsInstagram className='w-5 h-5 fill-gray-500/100'/>
          <BsTwitter className='w-5 h-5 fill-gray-500/100'/>
          <BsGithub className='w-5 h-5 fill-gray-500/100'/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

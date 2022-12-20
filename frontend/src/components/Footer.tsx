import React from 'react';
import SVGLink from './SVGLink';

function Footer() {
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
          <SVGLink name="Facebook" url="#" />
          <SVGLink name="Instagram" url="#" />
          <SVGLink name="Twitter" url="#" />
          <SVGLink name="Github" url="#" />
          <SVGLink name="Dribbbel" url="#" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

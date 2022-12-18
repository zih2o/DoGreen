import React from 'react';
import { Link } from 'react-router-dom';
import SVG from './SVG';

type svgLink = {
  url: string;
  name: string;
};

export default function SVGLink({ url, name }: svgLink) {
  return (
    <>
      <Link to={url} className="text-gray-500 hover:fill-gray-900 dark:hover:text-white">
        <SVG name={name} />
      </Link>
    </>
  );
}

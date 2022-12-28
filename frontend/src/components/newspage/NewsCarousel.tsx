import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const favTheme =
  'absolute top-1/2 w-10 h-10 z-0 text-garden4 opacity-50 transition-all dark:text-forest2 hover:cursor-pointer hover:opacity-100 ';

export default function NewsCarousel(props: Record<'imageList', string[]>) {
  const images = props.imageList;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${currentIdx}00%`,
  });
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setStyle({ marginLeft: `-${currentIdx}00%` });
  }, [currentIdx]);
  const handleClick = (i: number) => {
    let nextIndex = currentIdx + i;

    if (nextIndex < 0) nextIndex = images.length - 1;
    else if (nextIndex >= images.length) nextIndex = 0;

    setCurrentIdx(nextIndex);
  };
  return (
    <>
      <FaChevronLeft className={favTheme + 'left-10'} onClick={() => handleClick(-1)} />
      <div className={`w-64 h-64 overflow-hidden`}>
        <div ref={ref} className="flex transition-all " style={style}>
          {images.map((url, i) => (
            <img className={`flex-none w-64 h-64 object-contatin rounded-lg`} src={url} alt={url} key={i} />
          ))}
        </div>
      </div>
      <FaChevronRight className={favTheme + 'right-10'} onClick={() => handleClick(1)} />
    </>
  );
}

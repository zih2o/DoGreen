import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function NewsCarousel(props: Record<'imageList', string[]>) {
  // const images = props.imageList;
  const images = [
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',

    'https://images.unsplash.com/photo-1487734092093-e5b02908580e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2NlbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1615310748170-29d7088865ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a25pdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${currentIdx}00%`,
  });
  const ref = useRef<HTMLDivElement>(null);
  const favTheme =
    'absolute top-1/2 w-10 h-10 z-10 text-garden4 opacity-50 transition-all dark:text-forest2 hover:cursor-pointer hover:opacity-100 ';
  useEffect(() => {
    setStyle({ marginLeft: `-${currentIdx}00%` });
  }, [currentIdx]);
  const handleClick = (i: number) => {
    let nextIndex = currentIdx + i;

    if (nextIndex < 0) nextIndex = images.length - 1;
    else if (nextIndex >= images.length) nextIndex = 0;

    setCurrentIdx(nextIndex);
    console.log(ref.current?.className);
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

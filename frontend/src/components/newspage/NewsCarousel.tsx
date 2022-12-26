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
  const slideRef = useRef<HTMLDivElement>(null);
  const w = 80;
  const h = 64;
  const slideTheme = `flex `;
  const favTheme = 'w-20 h-20 text-white hover:cursor-pointer ';

  useEffect(() => {
    if (currentIdx === -1) {
      if (slideRef.current)
        slideRef.current.className = slideTheme + `transform -translate-x-${w * (images.length - 1)}`;
      setCurrentIdx(images.length - 1);
    } else if (currentIdx === images.length) {
      setCurrentIdx(0);
      if (slideRef.current) slideRef.current.className = slideTheme + `transform translate-x-0`;
    }
  }, [currentIdx]);

  const onClickLeftButton = () => {
    setCurrentIdx((prev) => prev - 1);
    if (slideRef.current) slideRef.current.className = slideTheme + `transform -translate-x-${currentIdx * w - w}`;
  };

  const onClickRightButton = () => {
    setCurrentIdx((prev) => prev + 1);
    if (slideRef.current) slideRef.current.className = slideTheme + `transform -translate-x-${w * (currentIdx + 1)}`;
  };

  return (
    <div className={`flex justify-between w-${w} h-${h} overflow-scroll`}>
      <FaChevronLeft className={favTheme} onClick={onClickLeftButton} />

      <div ref={slideRef}>
        {images.map((url, i) => (
          <img className={`w-full h-full object-contain rounded-md`} src={url} alt={url} key={i} />
        ))}
      </div>
      <FaChevronRight className={favTheme} onClick={onClickRightButton} />
    </div>
  );
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderComponentProps<T> = {
  items: T[] | undefined; 
  renderItem: (item: T) => React.ReactNode; 
  settings?: Partial<typeof defaultSettings>;
  classname : string;
};


const defaultSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true, 
  autoplaySpeed: 3000, 
  pauseOnHover: true, 
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 4, slidesToScroll: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 3, slidesToScroll: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
  ],
};


const SliderComponent = <T,>({ items = [], renderItem, settings, classname }: SliderComponentProps<T>) => {
  return (
    <div className={` ${classname ? classname : 'py-4 px-2 ' } w-full`}>
      <Slider {...{ ...defaultSettings, ...settings }}>
        {items.map((item, index) => (
          <div key={index} className={`${classname ? classname : 'px-2'}`}>{renderItem(item)}</div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

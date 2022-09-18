import { Button, Swiper, SwiperItem, View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import React, { useState } from "react";
import "./index.less";

interface ISwiperProps {
  // 列表项
  items: React.ReactNode[];
}

export const SwiperContainer = ({ items }) => {
  const router = useRouter();
  // console.log(router.params); // 参数接收

  // 滑块下标
  const [current, setCurrent] = useState(0);

  const handleChange = e => {
    const { detail } = e;
    setCurrent(detail.current);
    console.log(detail);
  };

  return (
    <Swiper
      className='test-h'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      onChange={handleChange}
      current={current}
      vertical
      disableTouch
    >
      {items.map((item, index) => (
        <SwiperItem
          key={index}
          onTouchMove={e => {
            e.stopPropagation();
            e.preventDefault();
            return;
          }}
        >
          {item}
        </SwiperItem>
      ))}
    </Swiper>
  );
};

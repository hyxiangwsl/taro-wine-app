import { Button, Swiper, SwiperItem, View } from "@tarojs/components";
import { useState } from "react";
import Home1 from "./chidu/home/index";

import "./index.less";

const PageView = () => {

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
      <SwiperItem
        onTouchMove={e => {
          e.stopPropagation();
          e.preventDefault();
          return;
        }}
      >
        <View className='demo-text-1'>1
        <Button onClick={()=>{setCurrent(2)}}>点击</Button>
        </View>
      </SwiperItem>
      <SwiperItem>
        <View className='demo-text-2'><Home1 /></View>
      </SwiperItem>
      <SwiperItem>
        <View className='demo-text-3'>3</View>
      </SwiperItem>
    </Swiper>
  );
};

export default PageView;

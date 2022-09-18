import { Button, Swiper, SwiperItem, View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { useState } from "react";
import "./index.less";

const PageView = () => {
  const router = useRouter();
  // console.log(router.params); // 参数接收

  // 滑块下标
  const [current, setCurrent] = useState(0);

  const handleChange = e => {
    const { detail } = e;
    setCurrent(detail.current)
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
        onTouchMove={(e) => {
          e.stopPropagation();
          e.preventDefault();
          return;
        }}
      >
        <View className='demo-text-1'>1
          <Button onClick={()=>{setCurrent(1)}}>点我</Button>
        </View>
      </SwiperItem>
      <SwiperItem>
        <View className='demo-text-2'>2</View>
      </SwiperItem>
      <SwiperItem>
        <View className='demo-text-3'>3</View>
      </SwiperItem>
    </Swiper>
  );
};

export default PageView;

import { Swiper, SwiperItem, Text } from "@tarojs/components";
import React, { Suspense } from "react";
import { contextSlice } from "@/redux/contextSlice";
import { useDispatch, useSelector } from "@/redux/hooks";
import "./index.less";


interface ISwiperProps {
  // 列表项
  items: Array<{
    com: any;
    path: string; // 用路径来当做id
  }>;
  changePlaying?:()=>void
}

export const SwiperContainer: React.FC<ISwiperProps> = ({ items ,changePlaying}) => {
  const currentCtx = useSelector(s => s.context.current);
  const prodList = useSelector(s => s.context.prodList || []);
  const dispatch = useDispatch();

  const currentProduct = useSelector(s => s.context.currentProduct);

  // 默认是首页的下标
  let current = currentCtx;
  if (currentProduct !== 'index') {
    // 如果是产品里面的话
    current = prodList.find(v => v.name === currentProduct)?.current || 0;
  }

  const handleChange = e => {
    const { detail } = e;
    dispatch(
      contextSlice.actions.changeCurrent({product: currentProduct, current: detail.current })
    );
    // console.log("下标改变", e);
  };

  console.log("current", current, "path", currentProduct);

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
      {items.map(({ com: Com }, index) => (
        <SwiperItem
          key={index}
          // onTouchMove={e => {
          //   e.stopPropagation();
          //   e.preventDefault();
          //   return;
          // }}
        >
          <Suspense fallback={<Text>Loading...</Text>}>
            <Com changePlaying={changePlaying} />
          </Suspense>
        </SwiperItem>
      ))}
    </Swiper>
  );
};

import React from "react";
import { Image } from "@tarojs/components";
import { useDispatch, useSelector } from "@/redux/hooks";
import { contextSlice } from "@/redux/contextSlice";
import img from "./imgs/index2_9.png";
import img_b from "./imgs/index2_9_black.png";
import "./index.less";

interface IProps {
  isBlack?: boolean; // 是否是黑色的
}

export const Back: React.FC<IProps> = props => {
  // 上一页还是上一个swiperItem
  const dispatch = useDispatch();

  const currentCtx = useSelector(s => s.context.current);
  const prodList = useSelector(s => s.context.prodList || []);

  const currentProduct = useSelector(s => s.context.currentProduct);

  // 默认是首页的下标
  let current = currentCtx;
  if (currentProduct !== "index") {
    // 如果是产品里面的话
    current = prodList.find(v => v.name === currentProduct)?.current || 0;
  }

  const doBack = () => {
    if (currentProduct !== "index") {
      dispatch(contextSlice.actions.setCurrentProduct({ product: "index" }));
      setTimeout(() => {
        // 重置0 // 返回首页
        dispatch(
          contextSlice.actions.setCurrentInit({ product: currentProduct })
        );
      }, 500);
    } else {
      // 第一页上翻
      dispatch(
        contextSlice.actions.changeCurrent({
          product: currentProduct,
          current: current - 1
        })
      );
    }
  };
  return (
    <Image
      src={props.isBlack ? img_b : img}
      className='music'
      onClick={doBack}
    />
  );
};

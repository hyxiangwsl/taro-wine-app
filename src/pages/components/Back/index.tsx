import Taro, { useRouter } from "@tarojs/taro";
import React from "react";
import { Image } from "@tarojs/components";
import { useDispatch } from "@/redux/hooks";
import { contextSlice } from "@/redux/contextSlice";
import img from "./imgs/index2_9.png";
import img_b from './imgs/index2_9_black.png';
import "./index.less";

interface IProps {
  isBlack?: boolean;// 是否是黑色的
}

export const Back: React.FC<IProps> = props => {
  // 上一页还是上一个swiperItem
  const dispatch = useDispatch();

  const router = useRouter();
  const { path } = router.params;

  const doBack = () => {
    if (path) {
      Taro.navigateBack();
      setTimeout(() => {
        // 重置0 或者第一页上翻
        dispatch(contextSlice.actions.setCurrentInit({ path }));
      }, 500);
    } else {
      // 重置0 或者第一页上翻
      dispatch(contextSlice.actions.setCurrentInit({ path }));
    }
  };
  return <Image src={props.isBlack?img_b:img} className='music' onClick={doBack} />;
};

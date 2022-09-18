import Taro, { useRouter } from "@tarojs/taro";
import React from "react";
import { Image } from "@tarojs/components";
import { useDispatch } from "@/redux/hooks";
import { contextSlice } from "@/redux/contextSlice";
import img from "./imgs/index2_9.png";
import "./index.less";

interface IProps {
  isPre?: boolean;
}

export const Back: React.FC<IProps> = props => {
  // 上一页还是上一个swiperItem
  const dispatch = useDispatch();

  const router = useRouter();
  const { path } = router.params;

  const doBack = () => {
    dispatch(contextSlice.actions.preCurrent({ path }));
  };
  return <Image src={img} className='music' onClick={doBack} />;
};

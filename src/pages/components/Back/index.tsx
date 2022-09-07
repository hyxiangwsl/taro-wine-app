import Taro from "@tarojs/taro";
import { Image } from "@tarojs/components";
import { useEffect } from "react";
import img from './imgs/index2_9.png'
import './index.less'

export const Back = () => {
  return <Image src={img} className='music' />;
};


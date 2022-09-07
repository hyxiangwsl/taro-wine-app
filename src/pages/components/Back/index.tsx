import Taro from "@tarojs/taro";
import { Image } from "@tarojs/components";
import img from './imgs/index2_9.png'
import './index.less'

export const Back = () => {
  const doBack = ()=>{
    Taro.navigateBack()
  }
  return <Image src={img} className='music' onClick={doBack} />;
};


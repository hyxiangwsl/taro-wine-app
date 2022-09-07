import Taro from "@tarojs/taro";
import { Image } from "@tarojs/components";
import { useEffect } from "react";
import img from "./imgs/index2_8.png";
import mp3 from "./imgs/bgm.mp3";
import "./index.less";

export const Music = () => {
  // useEffect(() => {
  //   console.log("ssss");
  //   const innerAudioContext = Taro.createInnerAudioContext();
  //   innerAudioContext.autoplay = true;
  //   innerAudioContext.loop = true;
  //   innerAudioContext.src = mp3;
  //   innerAudioContext.onPlay(() => {
  //     console.log("开始播放");
  //   });
  //   innerAudioContext.onError(res => {
  //     console.log(res.errMsg);
  //     console.log(res.errCode);
  //   });
  //   return () => {
  //     if (innerAudioContext) {
  //       innerAudioContext.destroy();
  //     }
  //   };
  // }, []);

  return <Image src={img} className='music active' />;
};

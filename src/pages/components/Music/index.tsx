import Taro from "@tarojs/taro";
import { Image } from "@tarojs/components";
import { useEffect } from "react";
import img from "./imgs/index2_8.png";
import img_bl from "./imgs/index2_8_black.png";
import mp3 from "./imgs/bgm.mp3";
import "./index.less";

interface IProps {
  isBlack?: boolean; // 是否是黑色的
}

export const Music: React.FC<IProps> = props => {
  // let innerAudioContext;
  // useEffect(() => {
  //   console.log("ssss");
  //   innerAudioContext = Taro.createInnerAudioContext();
  //   // innerAudioContext.autoplay = true;
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

  // const doPlay = () => {
  //   innerAudioContext.autoplay = true;
  //   // innerAudioContext.play();
  // };

  return (
    <Image
      src={props.isBlack ? img_bl : img}
      className='music active'
      onClick={() => {
        // doPlay();
      }}
    />
  );
};

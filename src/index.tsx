import { useEffect } from "react";
import Taro, { useError } from "@tarojs/taro";
import { Provider } from "react-redux";
import store from "./redux/store";
import mp3 from "./bgm.mp3";
import "./app.less";
import "./common.less";

export const App = props => {
  useEffect(() => {
    // const audioManager = Taro.createInnerAudioContext();
    // audioManager.src = "./bgm.mp3";
    // audioManager.play();
    // const innerAudioContext = Taro.createInnerAudioContext();
    // innerAudioContext.autoplay = true;
    // innerAudioContext.loop = true;
    // innerAudioContext.src = mp3;
    // console.log("innerAudioContext", innerAudioContext);
    // innerAudioContext.onPlay(() => {
    //   console.log("开始播放");
    // });
    // // innerAudioContext.play();

    // innerAudioContext.onError(res => {
    //   console.log(res.errMsg);
    //   console.log(res.errCode);
    // });

    // return () => {
    //   // innerAudioContext.stop();
    //   if (innerAudioContext) {
    //     innerAudioContext.destroy();
    //   }
    // };
  }, []);

  // this.props.children 是将要会渲染的页面
  // return this.props.children
  return <Provider store={store}>{props.children}</Provider>;
};

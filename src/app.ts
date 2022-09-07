import { Component, PropsWithChildren } from "react";
import Taro from "@tarojs/taro";
import mp3 from "./bgm.mp3";
import "./app.less";

let innerAudioContext;
class App extends Component<PropsWithChildren> {
  componentDidMount() {
    if (!innerAudioContext) {
      innerAudioContext = Taro.createInnerAudioContext();
      innerAudioContext.autoplay = true;
      innerAudioContext.loop = true;
      innerAudioContext.src = mp3;
      innerAudioContext.onPlay(() => {
        console.log("开始播放");
      });
      innerAudioContext.onError(res => {
        console.log(res.errMsg);
        console.log(res.errCode);
      });
    }

    return () => {};
  }

  componentWillUnmount() {
    innerAudioContext.stop();
    if (innerAudioContext) {
      innerAudioContext.destroy();
    }
  }

  render() {
    // this.props.children 是将要会渲染的页面
    return this.props.children;
  }
}

export default App;

import Index from "@/pages/homeIndex/index";
import { Text } from "@tarojs/components";
import { Suspense, useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { contextSlice } from "@/redux/contextSlice";
import { useSelector, useDispatch } from "@/redux/hooks";
// 引入页面组件 不使用动态组件
import pages from "./page";
import bgm from "./bgm.mp3";


const PageView = () => {
  const dispatch = useDispatch();

  const [sliderVal, setSliderVal] = useState(0);

  const playing = useSelector(s => s.context.playing);

  const changePlay = useSelector(s => s.context.changePlay);

  // 创建音频
  let innerAudioContext = Taro.createInnerAudioContext();
  innerAudioContext.src = bgm; // 音頻url
  innerAudioContext.loop = true;

  innerAudioContext.onPlay(() => {
    // 开始
    console.log("开始播放");
    dispatch(contextSlice.actions.changePlaying({ playing: true }));
  });
  innerAudioContext.onPause(() => {
    // 暂停
    console.log("暂停播放");
    dispatch(contextSlice.actions.changePlaying({ playing: false }));
  });
  innerAudioContext.onTimeUpdate(() => {
    if (sliderVal !== 0) {
      console.log("时间更新", innerAudioContext.currentTime);
      setSliderVal(innerAudioContext.currentTime);
    }
  });

  innerAudioContext.onStop(() => {
    console.log("停止", sliderVal);
    dispatch(contextSlice.actions.changePlaying({ playing: false }));
  });

  innerAudioContext.onError(res => {
    console.log("errMsg", res.errMsg);
    innerAudioContext.stop();
    dispatch(contextSlice.actions.changePlaying({ playing: false }));
  });

  const [audioContextIns] = useState(innerAudioContext); // 音频实例持久化

  // 切换播放状态
  const dochangePlaying = () => {
    dispatch(contextSlice.actions.setChangePlay({ changePlay: false }));
    if (playing) {
      audioContextIns.pause();
    } else {
      audioContextIns.play();
    }
  };

  useEffect(() => {
    if (changePlay) {
      dochangePlaying();
    }
  }, [changePlay]);

  useEffect(() => {
    return () => {
      if (audioContextIns) {
        audioContextIns.destroy();
      }
    };
  }, [audioContextIns]);

  const currentProduct = useSelector(s => s.context.currentProduct);

  const Com = pages[currentProduct || "guoniang"];

  return <div>{currentProduct === "index" ? <Index /> : <Com />}</div>;
};

export default PageView;

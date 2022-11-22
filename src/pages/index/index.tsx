import Index from "@/pages/index2/index";
import { Text } from "@tarojs/components";
import React, { Suspense, useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { useSelector } from "@/redux/hooks";
import bgm from "./bgm.mp3";

const PageView = () => {
  // const dispatch = useDispatch(); useDispatch

  const [sliderVal, setSliderVal] = useState(0);
  const [playing, setPlaying] = useState(false);

  // 创建音频
  let innerAudioContext = Taro.createInnerAudioContext();
  innerAudioContext.src = bgm; // 音頻url
  innerAudioContext.loop = true;

  innerAudioContext.onPlay(() => {
    // 开始
    // console.log("开始播放");
    setPlaying(true);
  });
  innerAudioContext.onPause(() => {
    // 暂停
    console.log("暂停播放");
    setPlaying(false);
  });
  innerAudioContext.onTimeUpdate(() => {
    if (sliderVal !== 0) {
      console.log("时间更新", innerAudioContext.currentTime);
      setSliderVal(innerAudioContext.currentTime);
    }
  });

  innerAudioContext.onStop(() => {
    console.log("停止", sliderVal);
    setPlaying(false);
  });

  innerAudioContext.onError(res => {
    console.log("errMsg", res.errMsg);
    innerAudioContext.stop();
    setPlaying(false);
  });

  const [audioContextIns] = useState(innerAudioContext); // 音频实例持久化

  // 切换播放状态
  const changePlaying = () => {
    console.log("改变播放");

    if (playing) {
      audioContextIns.pause();
    } else {
      audioContextIns.play();
    }
  };

  useEffect(() => {
    return () => {
      if (audioContextIns) {
        audioContextIns.destroy();
      }
    };
  }, [audioContextIns]);


  const currentProduct = useSelector(s => s.context.currentProduct);

  const Com = React.lazy(() =>
    import(`@/pages/detail/${currentProduct}/index`)
  );

  return (
    <div>
      <Suspense fallback={<Text>Loading...</Text>}>
        {currentProduct === "index" ? (
          <Index changePlaying={changePlaying} />
        ) : (
          <Com />
        )}
      </Suspense>
    </div>
  );
};

export default PageView;

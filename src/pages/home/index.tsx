import { View, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "@/redux/hooks";
import { contextSlice } from "@/redux/contextSlice";
import "./index.less";
import img1 from "./imgs/index1_2.png";
import img2 from "./imgs/index1_3.png";
import img3 from "./imgs/index1_4.png";

const PageView = () => {
  const [showPoint, setShowPoint] = useState(false);

  const first = useSelector(s => s.context.isFirstLoad);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setShowPoint(true);
    }, 2000);
  }, []);

  const toNextPage = () => {
    dispatch(contextSlice.actions.doNext({}));
  };

  return (
    <View className='index1'>
      <Image src={img1} className='index1_logo fadeOut'></Image>
      <View className='index1_footer'>
        <View className='index1_tiCon'>
          <Image src={img2} className='index1_title fadeOut'></Image>
        </View>
        <View className='index1_pCon'>
          {showPoint && (
            <Image
              src={img3}
              className='index1_pointer'
              onClick={() => {
                toNextPage();
                if (first) {
                  dispatch(
                    contextSlice.actions.changeFirstLoad({ isLoad: false })
                  );
                  dispatch(contextSlice.actions.setChangePlay({ changePlay: true }));
                }
              }}
            ></Image>
          )}
        </View>
      </View>
    </View>
  );
};

export default PageView;

import { View, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import { Back, Dialog, Music } from "@/pages/components";
import { useDispatch, useSelector } from "@/redux/hooks";
import { contextSlice } from "@/redux/contextSlice";
import "./index.less";
import detail_logo from "./imgs/xueyu_logo.png";
import detail_l from "./imgs/xueyu_detail_l.png";
import detail_r from "./imgs/xueyu_detail_r.png";
import xueyu_brand_desc from "./imgs/xueyu_brand_desc.png";

const Home = () => {
  const [isPortalVisible, setIsPortalVisible] = useState(false);


  const [isShowBtn, setIsShowBtn] = useState(false);

  const showPortal = () => {
    setIsPortalVisible(true);
  };

  const hidePortal = () => {
    setIsPortalVisible(false);
  };

  const dispatch = useDispatch();
  const currentProduct = useSelector(s => s.context.currentProduct);

  const toNextPage = () => {

    dispatch(contextSlice.actions.doNext({  product:currentProduct   }));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShowBtn(true);
    }, 2000);
  }, []);

  return (
    <View className='xueyu_home'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      <View className='xueyu_home_main' >
        <Image src={detail_logo} className='xueyu_home_main_logo fadeOut'></Image>
      </View>
      <View className='xueyu_home_pic_product'>
        <View
          className='footer_detail_con'
          style={{ opacity: isShowBtn ? 1 : 0 }}
        >
          {/* 产品介绍 */}
          <Image
            src={detail_r}
            className='footer_card'
            onClick={showPortal}
          ></Image>
          <Image
            src={detail_l}
            className='footer_card'
            onClick={toNextPage}
          ></Image>
        </View>
      </View>
      {isPortalVisible && (
        <Dialog visible={isPortalVisible} onHide={hidePortal}>
          <View className='look_alert_con'>
            <Image className='look_alert' src={xueyu_brand_desc}></Image>
          </View>
        </Dialog>
      )}
    </View>
  );
};

export default Home;

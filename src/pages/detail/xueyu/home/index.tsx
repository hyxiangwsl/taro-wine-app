import { View, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { Back, Dialog, Music } from "@/pages/components";
import "./index.less";
import detail_logo from "./imgs/xueyu_logo.png";
import detail_logo1 from "./imgs/xueyu_logo2.png";
import detail_product from "./imgs/xueyu_product.png";
import detail_l from "./imgs/xueyu_detail_l.png";
import detail_r from "./imgs/xueyu_detail_r.png";
import xueyu_brand_desc from "./imgs/xueyu_brand_desc.png";

const Home = () => {
  const [isPortalVisible, setIsPortalVisible] = useState(false);

  const [isShow, setIsShow] = useState(false);

  const [isShowBtn, setIsShowBtn] = useState(false);

  const showPortal = () => {
    setIsPortalVisible(true);
  };

  const hidePortal = () => {
    setIsPortalVisible(false);
  };

  const toNextPage = () => {
    Taro.navigateTo({
      url: "pages/detail/xueyu/detail1"
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 2000);
    setTimeout(() => {
      setIsShowBtn(true);
    }, 3000);
  }, []);

  return (
    <View className='xueyu_home'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      <View className='xueyu_home_main' style={{ opacity: isShow ? 1 : 0 }}>
        <Image src={detail_logo} className='xueyu_home_main_logo'></Image>
        <Image src={detail_logo1} className='xueyu_home_main_logo2'></Image>
      </View>
      <View className='xueyu_home_pic_product'>
        <Image
          src={detail_product}
          className='xueyu_home_pic scaleDraw'
        ></Image>
        <View
          className='footer_detail_con'
          style={{ opacity: isShowBtn ? 1 : 0 }}
        >
          <Image
            src={detail_l}
            className='footer_card'
            onClick={toNextPage}
          ></Image>
          {/* 产品介绍 */}
          <Image
            src={detail_r}
            className='footer_card'
            onClick={showPortal}
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

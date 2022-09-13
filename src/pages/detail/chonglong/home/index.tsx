import { View, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { Back, Dialog, Music } from "@/pages/components";
import "./index.less";
import detail_logo from "./imgs/chonglong_logo.png";
import detail_logo1 from "./imgs/chonglong_logo2.png";
import detail_product from "./imgs/chonglong_product.png";
import detail_l from "./imgs/chonglong_detail_l.png";
import detail_r from "./imgs/chonglong_detail_r.png";
import chonglong_brand_desc from "./imgs/chonglong_brand_desc.png";

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
      url: "pages/detail/chonglong/detail1"
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
    <View className='chonglong_home'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      <View className='chonglong_home_main' style={{ opacity: isShow ? 1 : 0 }}>
        <Image src={detail_logo} className='chonglong_home_main_logo'></Image>
        <Image src={detail_logo1} className='chonglong_home_main_logo2'></Image>
      </View>
      <View className='chonglong_home_pic_product'>
        <Image
          src={detail_product}
          className='chonglong_home_pic scaleDraw'
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
            <Image className='look_alert' src={chonglong_brand_desc}></Image>
          </View>
        </Dialog>
      )}
    </View>
  );
};

export default Home;
import { View, Image } from "@tarojs/components";
import { useState } from "react";
import Taro from "@tarojs/taro";
import { Back, Dialog, Music } from "@/pages/components";
import "./index.less";
import detail_logo from "./imgs/xufu_logo.png";
import detail_product from "./imgs/xufu_product.png";
import detail_l from "./imgs/xufu_detail_l.png";
import xufu_brand_desc from "./imgs/xufu_brand_desc.png";


const Home = () => {
  const [isPortalVisible, setIsPortalVisible] = useState(false);

  const showPortal = () => {
    setIsPortalVisible(true);
  };

  const hidePortal = () => {
    setIsPortalVisible(false);
  };

  const toNextPage = ()=>{
    Taro.navigateTo({
      url: 'pages/detail/xufu/detail1'
    });
  }



  return (
    <View className='xufu_home'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      <View className='xufu_home_main fadeOut'>
        <Image src={detail_logo} className='xufu_home_main_logo'></Image>
      </View>
      <View className='xufu_home_pic_product '>
        <Image src={detail_product} className='xufu_home_pic scaleDraw'></Image>
        <View className='footer_detail_con'>
          <Image src={detail_l} className='footer_card' onClick={toNextPage}></Image>
          {/* 产品介绍 */}
          <Image
            src={detail_l}
            className='footer_card'
            onClick={showPortal}
          ></Image>
        </View>
      </View>
      {isPortalVisible && (
        <Dialog visible={isPortalVisible} onHide={hidePortal}>
          <View className='look_alert_con'>
            <Image className='look_alert' src={xufu_brand_desc}></Image>
          </View>
        </Dialog>
      )}
    </View>
  );
};

export default Home;

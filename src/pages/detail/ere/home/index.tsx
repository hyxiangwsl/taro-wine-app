import { View, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { useDispatch } from "@/redux/hooks";
import { contextSlice } from "@/redux/contextSlice";
import { Back, Dialog, Music } from "@/pages/components";
import "./index.less";
import detail_logo from "./imgs/ere_logo.png";
import detail_logo1 from "./imgs/ere_logo2.png";
import detail_product from "./imgs/ere_product.png";
import detail_l from "./imgs/ere_detail_l.png";
import detail_r from "./imgs/ere_detail_r.png";
import ere_brand_desc from "./imgs/ere_brand_desc.png";

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
  const router = useRouter();
  const dispatch = useDispatch();

  const toNextPage = () => {
    const { path } = router.params;
    dispatch(contextSlice.actions.doNext({ path }));
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
    <View className='ere_home'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      <View className='ere_home_main' style={{ opacity: isShow ? 1 : 0 }}>
        <Image src={detail_logo} className='ere_home_main_logo'></Image>
        <Image src={detail_logo1} className='ere_home_main_logo2'></Image>
      </View>
      <View className='ere_home_pic_product'>
        <Image src={detail_product} className='ere_home_pic scaleDraw'></Image>
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
            <Image className='look_alert' src={ere_brand_desc}></Image>
          </View>
        </Dialog>
      )}
    </View>
  );
};

export default Home;

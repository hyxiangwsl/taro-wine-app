import { View, Image } from "@tarojs/components";
import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { Back, Dialog, Music } from "@/pages/components";
import { useDispatch } from "@/redux/hooks";
import { contextSlice } from "@/redux/contextSlice";
import "./index.less";
import detail_logo from "./imgs/tongchuan_logo.png";
import detail_logo1 from "./imgs/tongchuan_logo2.png";
import detail_product from "./imgs/tongchuan_product.png";
import detail_l from "./imgs/tongchuan_detail_l.png";
import detail_r from "./imgs/tongchuan_detail_r.png";
import tongchuan_brand_desc from "./imgs/tongchuan_brand_desc.png";

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
    <View className='tongchuan_home'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      <View className='tongchuan_home_main' >
        <Image src={detail_logo} className='tongchuan_home_main_logo fadeOut'></Image>
      </View>
      <View className='tongchuan_home_pic_product'>
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
            <Image className='look_alert' src={tongchuan_brand_desc}></Image>
          </View>
        </Dialog>
      )}
    </View>
  );
};

export default Home;

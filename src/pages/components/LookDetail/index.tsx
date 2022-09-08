import { Image, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { createRef, useState } from "react";
import { Dialog } from "../Dialog";
// 引入弹窗组件
import "./index.less";

interface NextProps {
  // 图片
  img: any;
  alert: any; // 弹框
}

export const LookDetail: React.FC<NextProps> = ({ img, alert }) => {
  const [isPortalVisible, setIsPortalVisible] = useState(false);

  const showPortal = () => {
    setIsPortalVisible(true);
  };

  const hidePortal = () => {
    setIsPortalVisible(false);
  };

  return (
    <View>
      <Image src={img} className='look_detail' onClick={showPortal} />
      {isPortalVisible && (
        <Dialog visible={isPortalVisible} onHide={hidePortal}>
          <View className='look_alert_con'>
            <Image className='look_alert' src={alert}></Image>
          </View>
        </Dialog>
      )}
    </View>
  );
};

import React from "react";
import { createPortal } from "react-dom";
import { View } from "@tarojs/components";
// 引入弹窗组件
import "./index.less";

interface DialogProps {
  children: React.ReactNode;
  visible: boolean;
  onHide?: () => void;
}

export const Dialog: React.FC<DialogProps> = props => {
  const { visible, children, onHide } = props;
  const handleClick = e => {
    if (onHide) {
      onHide();
    }
  };
  return visible
    ? createPortal(
        <View className='portal-custom' onClick={handleClick}>
          <View className='portal-body popIn'>{children}</View>
        </View>,
        document.getElementById("dialog-root")
      )
    : null;
};

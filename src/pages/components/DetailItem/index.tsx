import { View } from "@tarojs/components";
import React from "react";
import { Back, LookDetail, Music } from "@/pages/components";
import "./index.less";
import { Next } from "../Next/index";

interface DetailProps {
  background: string; // 背景图
  alertH?: any; // 上面的弹窗内容
  alertF: any; // 下面的弹窗内容
  detailH?: any; // 上面的了解详情
  detailF: any; // 下面的了解详情
  next?: any;
  nextPath?: string;
  isBlack?:boolean;// 返回和音乐键是否黑色
}

export const DetailItem: React.FC<DetailProps> = props => {
  const {
    background,
    detailF,
    detailH,
    alertF,
    alertH,
    next,
    nextPath,
    isBlack = false
  } = props;
  return (
    <View className={`detail_item_con ${background}`}>
      <View className='page_header'>
        <Back isBlack={isBlack} />
        <Music isBlack={isBlack} />
      </View>
      <View className='page_content'>
        <View className='detail_item_i1'>
          {detailH && alertH && (
            <LookDetail
              img={detailH}
              alert={alertH}
              selfClassName='self_look_detail'
            />
          )}
        </View>

        <View
          className={`detail_item_i2 ${
            !detailH || next ? "" : "detail_item_i2_bt"
          }`}
        >
          <LookDetail
            img={detailF}
            alert={alertF}
            selfClassName='self_look_detail'
          />
        </View>
        <View className='detail_item_next'>
          {next && nextPath && <Next img={next} to={nextPath} />}
        </View>
      </View>
    </View>
  );
};

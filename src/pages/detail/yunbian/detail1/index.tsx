import { View } from "@tarojs/components";
import { Back, LookDetail, Music, DetailItem } from "@/pages/components";

import "./index.less";
import detailH from "./imgs/yunbian_look_h_1.png";

import detailF from "./imgs/yunbian_look_f_1.png";

import alertH from "./imgs/yunbian_alert_h_1.png";
import alertF from "./imgs/yunbian_alert_f_1.png";
import next from "./imgs/yunbian_next_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='yunbian_detail_1'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/yunbian/detail2'
    />
  );
};

export default Detail;

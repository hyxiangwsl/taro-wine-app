import {  DetailItem } from "@/pages/components";

import "./index.less";
import detailH from "./imgs/xueyu_look_h_1.png";

import detailF from "./imgs/xueyu_look_f_1.png";

import alertH from "./imgs/xueyu_alert_h_1.jpg";
import alertF from "./imgs/xueyu_alert_f_1.jpg";
import next from "./imgs/xueyu_next_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='xueyu_detail_1'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/xueyu/detail2'
    />
  );
};

export default Detail;

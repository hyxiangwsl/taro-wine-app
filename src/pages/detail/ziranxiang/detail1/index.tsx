import {  DetailItem } from "@/pages/components";

import "./index.less";
import detailH from "./imgs/ziranxiang_look_h_1.png";

import detailF from "./imgs/ziranxiang_look_f_1.png";

import alertH from "./imgs/ziranxiang_alert_h_1.png";
import alertF from "./imgs/ziranxiang_alert_f_1.png";
import next from "./imgs/ziranxiang_next_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='ziranxiang_detail_1'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/ziranxiang/detail2'
    />
  );
};

export default Detail;

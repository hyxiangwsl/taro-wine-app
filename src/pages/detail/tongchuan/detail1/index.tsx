import {  DetailItem } from "@/pages/components";

import "./index.less";
import detailH from "./imgs/tongchuan_look_h_1.png";

import detailF from "./imgs/tongchuan_look_f_1.png";

import alertH from "./imgs/tongchuan_alert_h_1.png";
import alertF from "./imgs/tongchuan_alert_f_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='tongchuan_detail_1'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      // next={next}
      // nextPath='/pages/detail/tongchuan/detail2'
    />
  );
};

export default Detail;

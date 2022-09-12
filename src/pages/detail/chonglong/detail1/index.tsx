import {  DetailItem } from "@/pages/components";

import "./index.less";
import detailH from "./imgs/chonglong_look_h_1.png";

import detailF from "./imgs/chonglong_look_f_1.png";

import alertH from "./imgs/chonglong_alert_h_1.png";
import alertF from "./imgs/chonglong_alert_f_1.png";
import next from "./imgs/chonglong_next_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='chonglong_detail_1'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/chonglong/detail2'
    />
  );
};

export default Detail;

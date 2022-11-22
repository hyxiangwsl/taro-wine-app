import {  DetailItem } from "@/pages/components";
import "./index.less";
import detailH from "./imgs/chidu_look_h_1.png";

import detailF from "./imgs/chidu_look_f_1.png";

import alertH from "./imgs/chidu_alert_h_1.png";
import alertF from "./imgs/chidu_alert_f_1.png";
import next from "./imgs/chidu_next_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='chidu_detail_1'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/chidu/detail2'
    />
  );
};

export default Detail;

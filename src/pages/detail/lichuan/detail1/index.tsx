import {  DetailItem } from "@/pages/components";

import "./index.less";
import detailH from "./imgs/lichuan_look_h_1.png";

import detailF from "./imgs/lichuan_look_f_1.png";

import alertH from "./imgs/lichuan_alert_h_1.png";
import alertF from "./imgs/lichuan_alert_f_1.png";
import next from "./imgs/lichuan_next_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='lichuan_detail_1'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      // next={next}
      // nextPath='/pages/detail/lichuan/detail2'
    />
  );
};

export default Detail;

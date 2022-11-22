import { DetailItem } from "@/pages/components";

import "./index.less";
import detailH from "./imgs/xufu_look_h_1.png";

import detailF from "./imgs/xufu_look_f_1.png";

import alertH from "./imgs/xufu_alert_h_1.png";
import alertF from "./imgs/xufu_alert_f_1.png";
import next from "./imgs/xufu_next_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='xufu_detail_1'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/xufu/detail2'
    />
  );
};

export default Detail;

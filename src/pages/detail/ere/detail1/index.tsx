import { DetailItem } from "@/pages/components";

import "./index.less";
import detailH from "./imgs/ere_look_h_1.png";

import detailF from "./imgs/ere_look_f_1.png";

import alertH from "./imgs/ere_alert_h_1.png";
import alertF from "./imgs/ere_alert_f_1.png";
import next from "./imgs/ere_next_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='ere_detail_1'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/ere/detail2'
    />
  );
};

export default Detail;


import { DetailItem } from "@/pages/components";
import next from "@/pages/detail/yunbian/detail1/imgs/yunbian_next_1.png";
import detailH from "@/pages/detail/yunbian/detail1/imgs/yunbian_look_h_1.png";
import detailF from "@/pages/detail/yunbian/detail1/imgs/yunbian_look_f_1.png";
import "./index.less";

import alertH from "./imgs/yunbian_alert_h_2.png";
import alertF from "./imgs/yunbian_alert_f_2.png";

const Detail = () => {
  return (
    <DetailItem
      background='yunbian_detail_2'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/yunbian/detail3'
    />
  );
};

export default Detail;

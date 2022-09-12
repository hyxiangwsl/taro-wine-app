
import { DetailItem } from "@/pages/components";
import next from "@/pages/detail/xufu/detail1/imgs/xufu_next_1.png";
import detailH from "@/pages/detail/xufu/detail1/imgs/xufu_look_h_1.png";
import detailF from "@/pages/detail/xufu/detail1/imgs/xufu_look_f_1.png";
import "./index.less";

import alertH from "./imgs/xufu_alert_h_5.png";
import alertF from "./imgs/xufu_alert_f_5.png";

const Detail = () => {
  return (
    <DetailItem
      background='xufu_detail_5'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/xufu/detail6'
    />
  );
};

export default Detail;

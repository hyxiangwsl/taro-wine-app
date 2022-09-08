
import { DetailItem } from "@/pages/components";
import next from "@/pages/detail/xufu/detail1/imgs/xufu_next_1.png";
import detailH from "@/pages/detail/xufu/detail1/imgs/xufu_look_h_1.png";
import detailF from "@/pages/detail/xufu/detail1/imgs/xufu_look_f_1.png";
import "./index.less";

import alertH from "./imgs/xufu_alert_h_2.png";
import alertF from "./imgs/xufu_alert_f_2.png";

const Detail = () => {
  return (
    <DetailItem
      background='xufu_detail_2'
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

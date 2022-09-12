
import { DetailItem } from "@/pages/components";
import next from "@/pages/detail/xufu/detail1/imgs/xufu_next_1.png";
import detailH from "@/pages/detail/xufu/detail1/imgs/xufu_look_h_1.png";
import detailF from "@/pages/detail/xufu/detail1/imgs/xufu_look_f_1.png";
import "./index.less";

import alertH from "./imgs/xufu_alert_h_4.png";
import alertF from "./imgs/xufu_alert_f_4.png";

const Detail = () => {
  return (
    <DetailItem
      background='xufu_detail_4'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/xufu/detail5'
    />
  );
};

export default Detail;

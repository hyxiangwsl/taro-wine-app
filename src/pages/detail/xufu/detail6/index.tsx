
import { DetailItem } from "@/pages/components";
import detailF from "@/pages/detail/xufu/detail1/imgs/xufu_look_h_1.png";
import "./index.less";

import alertF from "./imgs/xufu_alert_f_6.png";

const Detail = () => {
  return (
    <DetailItem
      background='xufu_detail_6'
      alertF={alertF}
      detailF={detailF}
    />
  );
};

export default Detail;

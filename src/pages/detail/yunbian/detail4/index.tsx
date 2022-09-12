
import { DetailItem } from "@/pages/components";
import detailF from "@/pages/detail/yunbian/detail1/imgs/yunbian_look_f_1.png";
import "./index.less";

import alertF from "./imgs/yunbian_alert_f_4.png";

const Detail = () => {
  return (
    <DetailItem
      background='yunbian_detail_4'
      alertF={alertF}
      detailF={detailF}
    />
  );
};

export default Detail;

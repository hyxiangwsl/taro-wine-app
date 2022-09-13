
import { DetailItem } from "@/pages/components";
import detailH from "@/pages/detail/ziranxiang/detail1/imgs/ziranxiang_look_h_1.png";
import detailF from "@/pages/detail/ziranxiang/detail1/imgs/ziranxiang_look_f_1.png";
import "./index.less";

import alertH from "./imgs/ziranxiang_alert_h_2.jpg";
import alertF from "./imgs/ziranxiang_alert_f_2.jpg";

const Detail = () => {
  return (
    <DetailItem
      background='ziranxiang_detail_2'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
    />
  );
};

export default Detail;

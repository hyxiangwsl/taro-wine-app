
import { DetailItem } from "@/pages/components";
import detailH from "@/pages/detail/chidu/detail1/imgs/chidu_look_h_1.png";
import detailF from "@/pages/detail/chidu/detail1/imgs/chidu_look_f_1.png";
import "./index.less";

import alertH from "./imgs/chidu_alert_h_2.png";
import alertF from "./imgs/chidu_alert_f_2.png";

const Detail = () => {
  return (
    <DetailItem
      background='chidu_detail_2'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
    />
  );
};

export default Detail;

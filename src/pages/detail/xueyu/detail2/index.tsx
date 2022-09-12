
import { DetailItem } from "@/pages/components";
import detailH from "@/pages/detail/xueyu/detail1/imgs/xueyu_look_h_1.png";
import detailF from "@/pages/detail/xueyu/detail1/imgs/xueyu_look_f_1.png";
import "./index.less";

import alertH from "./imgs/xueyu_alert_h_2.png";
import alertF from "./imgs/xueyu_alert_f_2.png";

const Detail = () => {
  return (
    <DetailItem
      background='xueyu_detail_2'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
    />
  );
};

export default Detail;

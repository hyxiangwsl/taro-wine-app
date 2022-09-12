
import { DetailItem } from "@/pages/components";
import detailH from "@/pages/detail/ere/detail1/imgs/ere_look_h_1.png";
import detailF from "@/pages/detail/ere/detail1/imgs/ere_look_f_1.png";
import next from "@/pages/detail/ere/detail1/imgs/ere_next_1.png";
import "./index.less";

import alertH from "./imgs/ere_alert_h_2.png";
import alertF from "./imgs/ere_alert_f_2.png";

const Detail = () => {
  return (
    <DetailItem
      background='ere_detail_2'
      alertH={alertH}
      detailH={detailH}
      alertF={alertF}
      detailF={detailF}
      next={next}
      nextPath='/pages/detail/ere/detail3'
    />
  );
};

export default Detail;

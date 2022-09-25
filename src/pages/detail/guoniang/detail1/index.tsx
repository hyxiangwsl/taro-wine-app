import {  DetailItem } from "@/pages/components";

import "./index.less";

import detailF from "./imgs/guoniang_look_f_1.png";

import alertF from "./imgs/guoniang_alert_f_1.png";

const Detail = () => {
  return (
    <DetailItem
      background='guoniang_detail_1'
      alertF={alertF}
      detailF={detailF}
    />
  );
};

export default Detail;


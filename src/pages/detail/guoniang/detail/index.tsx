import { View, } from "@tarojs/components";
import { Back, LookDetail, Music } from "@/pages/components";
import "./index.less";
import img from "../imgs/guoniang_detail.png";
import alert from "../imgs/alert.png";

const Detail = () => {
  return (
    <View className='guoniang_detail_1'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      {/* <Image src={circle} className='guoniang_detail_pic_product'></Image> */}
      {/* <View className='guoniang_detail_main '>
        <Image src={detail_title} className='guoniang_detail_t'></Image>
        <Image src={detail_btitle} className='guoniang_detail_bt'></Image>
      </View> */}

      <LookDetail img={img} alert={alert} />
    </View>
  );
};

export default Detail;

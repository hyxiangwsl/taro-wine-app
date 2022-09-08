import { View, } from "@tarojs/components";
import { Back, LookDetail, Music } from "@/pages/components";
import "./index.less";
import img from "../imgs/xufu_detail.png";
import alert from "../imgs/alert.png";

const Detail = () => {
  return (
    <View className='xufu_detail'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      {/* <Image src={circle} className='xufu_detail_pic_product'></Image> */}
      {/* <View className='xufu_detail_main '>
        <Image src={detail_title} className='xufu_detail_t'></Image>
        <Image src={detail_btitle} className='xufu_detail_bt'></Image>
      </View> */}

      <LookDetail img={img} alert={alert} />
    </View>
  );
};

export default Detail;

import { View, Image } from "@tarojs/components";
import { Back, Music, Next } from "@/pages/components";
import "./index.less";
import detail_logo from "../imgs/logo1.png";
import detail_t from "../imgs/title1.png";
import detail_product from "../imgs/guoniang_product.png";
import next from '../imgs/guoniang_next.png';

const Home = () => {

  return (
    <View className='guoniang_home'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      <View className='guoniang_home_main fadeOut'>
        <Image src={detail_logo} className='guoniang_home_main_logo'></Image>
        <Image src={detail_t} className='guoniang_home_main_t'></Image>
      </View>
      <View className='guoniang_home_pic_product scaleDraw'>
        <Image src={detail_product} className='guoniang_home_pic'></Image>
      </View>
      {/* 跳转下一页 */}
      <Next className='guoniang_home_next' img={next} />
    </View>
  );
};

export default Home;

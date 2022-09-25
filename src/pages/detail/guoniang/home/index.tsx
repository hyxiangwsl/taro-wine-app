import { View, Image } from "@tarojs/components";
import { Back, Music, Next } from "@/pages/components";
import "./index.less";
import detail_logo from "./imgs/guoniang_logo.png";
import next from './imgs/guoniang_next.png';

const Home = () => {

  return (
    <View className='guoniang_home'>
      <View className='page_header'>
        <Back />
        <Music />
      </View>
      <View className='guoniang_home_main'>
        <Image src={detail_logo} className='guoniang_home_main_logo fadeOut'></Image>
      </View>
      {/* 跳转下一页 */}
      <Next className='guoniang_home_next' img={next} />
    </View>
  );
};

export default Home;

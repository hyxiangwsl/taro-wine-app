import { View, Image } from "@tarojs/components";
import { Component } from "react";
import { Music, Next } from "../components";
import "./index.less";
import index2_title from "./imgs/index2_4.png";
import index2_btitle from "./imgs/index2_5.png";
import index2_desc from "./imgs/index2_2.png";
import index2_pic from "./imgs/index2_6.png";
// import index2_pic_bt from "./imgs/index2_7.png";
import next from "./imgs/index2_next.png";

export default class PageView extends Component {
  render() {
    return (
      <View className='index2'>
        <View className='index2_header'>
          <Music />
        </View>
        <View className='index2_main fadeOut'>
          <Image src={index2_title} className='index2_main_t'></Image>
          <Image src={index2_btitle} className='index2_main_bt'></Image>
          <Image src={index2_desc} className='index2_main_desc'></Image>
        </View>
        <View className='index2_pic_con fadeOut'>
          <Image src={index2_pic} className='index2_pic'></Image>
          {/* <Image src={index2_pic_bt} className='index2_pic_bt'></Image> */}
        </View>

        <Next img={next} className='index2_next' />
      </View>
    );
  }
}

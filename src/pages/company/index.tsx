import { View, Image } from "@tarojs/components";
import { Component } from "react";
import { Music, Next } from "../components";
import "./index.less";
// import index2_pic_bt from "./imgs/index2_7.png";
import next from "./imgs/index2_next.png";

export default class PageView extends Component {
  render() {
    return (
      <View className='compony_index2'>
        <View className='index2_header'>
          <Music />
        </View>
        <Next img={next} className='index2_next' />
      </View>
    );
  }
}

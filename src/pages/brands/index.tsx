import { View, Image } from "@tarojs/components";
import { Component } from "react";
import { Music, Next } from "../components";
import "./index.less";


export default class PageView extends Component {
  render() {
    return (
      <View className='index3'>
        <View className='index3_header'>
          <Music />
        </View>

        <Next to='/pages/brands/index' />
      </View>
    );
  }
}

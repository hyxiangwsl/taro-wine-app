import { View, Image } from "@tarojs/components";
import { Component } from "react";
import Taro from "@tarojs/taro";
import "./index.less";
import img1 from "./imgs/index1_2.png";
import img2 from "./imgs/index1_3.png";
import img3 from "./imgs/index1_4.png";

export default class PageView extends Component {
  componentDidMount() {}

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail);
  }

  toNextPage = () => {
    Taro.navigateTo({
      url: '/pages/company/index'
    })
  };

  render() {
    return (
      <View className='index1'>
        <Image src={img1} className='index1_logo fadeOut'></Image>
        <View className='index1_footer'>
          <View className='index1_tiCon'>
            <Image src={img2} className='index1_title fadeOut'></Image>
          </View>
          <View className='index1_pCon'>
            <Image
              src={img3}
              className='index1_pointer'
              onClick={() => {
                this.toNextPage();
              }}
            ></Image>
          </View>
        </View>
      </View>
    );
  }
}

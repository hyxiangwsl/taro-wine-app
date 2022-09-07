import { View, Image } from "@tarojs/components";
import { Component } from "react";
import { Back, Music } from "../components";
import "./index.less";
import text from "./imgs/index3_text.png";
import logo1 from "./imgs/index3_5.png";
import logo2 from "./imgs/index3_11.png";
import logo3 from "./imgs/index3_10.png";
import logo4 from "./imgs/index3_7.png";
import logo5 from "./imgs/index3_14.png";
import logo6 from "./imgs/index3_3.png";
import logo7 from "./imgs/index3_6.png";
import logo8 from "./imgs/index3_4.png";
import logo9 from "./imgs/index3_9.png";
import logo10 from "./imgs/index3_8.png";
import Taro from "@tarojs/taro";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10
];

interface Istate {
  ativeIndex: number;
  isChange: boolean; // 是否改变logo
}
export default class PageView extends Component<{}, Istate> {
  state = {
    ativeIndex: 1,
    isChange: true
  };

  handleClick = (index: number) => {
    const { ativeIndex } = this.state;
    if (ativeIndex !== index) {
      this.setState({
        isChange: false
      });

      // 设置延迟 让动画出来
      setTimeout(() => {
        this.setState({
          isChange: true,
          ativeIndex: index
        });
      }, 200);
    }
  };

  toDetail = ()=>{
    Taro.navigateTo({
      url:'pages/detail/index'
    })
  }

  render() {
    const { ativeIndex, isChange } = this.state;
    return (
      <View className='index3'>
        <View className='index3_header'>
          <Back />
          <Music />
        </View>
        <View className='index3_main'>
          {logos.map((item, index) => {
            return (
              <Image
                key={index}
                className={`index3_logo index3_position${index} ${
                  ativeIndex === index ? "logo_active" : ""
                }`}
                src={item}
                onClick={() => {
                  this.handleClick(index);
                }}
              ></Image>
            );
          })}
          <Image
            src={logos[ativeIndex]}
            className={`index3_logo index3_logo_center ${
              isChange ? "scaleDraw" : ""
            } logo_active`}
            onClick={this.toDetail}
          ></Image>
        </View>

        <View>
          <Image className='index3_text' src={text}></Image>
        </View>
      </View>
    );
  }
}

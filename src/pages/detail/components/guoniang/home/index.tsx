import { View, Image, Text } from "@tarojs/components";
import { Component } from "react";
import { Back, Music, Next } from "@/pages/components";
import "./index.less";
import detail_logo from "../imgs/logo.png";
import detail_product from "../imgs/product.png";


export const Home =()=> {
  return (
    <View className='guoniang_home'>
      <View className='guoniang_home_header'>
        <Back />
        <Music />
      </View>
      <View className='guoniang_home_main fadeOut'>
        <Image src={detail_logo} className='guoniang_home_main_logo'></Image>
        <Text className='guoniang_home_main_t'>酱香新高度</Text>
      </View>
      <View className='guoniang_home_pic_product scaleDraw'>
        <Image src={detail_product} className='guoniang_home_pic'></Image>
      </View>

      <Next to='/pages/brands/index' />
    </View>
  );
}

import { View, Image, Text } from "@tarojs/components";
import { Component } from "react";
import { Back, LookDetail, Music, } from "@/pages/components";
import "./index.less";
import detail_title from "../imgs/title.png";
import detail_product from "../imgs/product.png";
import detail_btitle from "../imgs/btitle.png";
import img from '../imgs/detail.png';
import alert from '../imgs/alert.png';

export const Detail = () => {
  return (
    <View className='guoniang_detail'>
      <View className='guoniang_detail_header'>
        <Back />
        <Music />
      </View>
      <View className='guoniang_detail_main fadeOut'>
        <View className='guoniang_detail_pic_product fadeOut'>
          <Image src={detail_product} className='guoniang_detail_pic'></Image>
        </View>
        <Image src={detail_title} className='guoniang_detail_t'></Image>
        <Image src={detail_btitle} className='guoniang_detail_bt'></Image>
      </View>

      <LookDetail img={img} alert={alert} />
    </View>
  );
};
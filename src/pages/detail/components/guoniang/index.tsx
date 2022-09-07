import { View, Image, Text, Swiper, ScrollView } from "@tarojs/components";
import { Component } from "react";
import { Back, Music, Next } from "../../../components";
import "./index.less";
import detail_logo from "./imgs/logo.png";
import detail_product from "./imgs/product.png";
import { Home } from './home/index';
import { Detail } from "./detail";

export const GuoNiang =()=> {

    const scrollStyle = {
      height: '100%'
    }
    const scrollTop = 0
    const Threshold = 20
    return (
      <ScrollView
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
      >
        <Home />
        <Detail />
      </ScrollView>
    );
  }

import { View, Image } from "@tarojs/components";
import React, {  useState } from "react";
import { contextSlice } from "@/redux/contextSlice";
import { useDispatch } from "@/redux/hooks";

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
import { Product } from "./Product";

interface Logo {
  path: string;
  img: any;
  name: string;
}

const logos: Logo[] = [
  {
    img: logo1,
    path: Product.YUN_BIAN,
    name: "云边藏秘"
  },
  {
    img: logo2,
    path: Product.GUO_NIANG,
    name: "国酿"
  },
  {
    img: logo3,
    path: Product.XU_FU,
    name: "叙府"
  },
  {
    img: logo4,
    path: Product.CHI_DU,
    name: "赤渡"
  },
  {
    img: logo5,
    path: Product.TONG_CHUAN,
    name: "通川"
  },
  {
    img: logo6,
    path: Product.ER_E,
    name: "二峨"
  },
  {
    img: logo7,
    path: Product.LI_CHUAN,
    name: "礼传"
  },
  {
    img: logo8,
    path: Product.CHONG_LONG,
    name: "重龍"
  },
  {
    img: logo9,
    path: Product.ZI_RAN_XIANG,
    name: "自然香"
  },
  {
    img: logo10,
    path: Product.XUE_YU,
    name: "雪域雄鹰"
  }
];

interface IProps {
  next: (path: string) => void;
  back: () => void;
}

const PageView: React.FC<IProps> = () => {
  const [ativeIndex, setAtiveIndex] = useState<number>(1);
  const [isChange, setIsChange] = useState<boolean>(true);
  const [path, setPath] = useState<string>("guoniang");
  const dispatch = useDispatch();

  const handleClick = (index: number, item: Logo) => {
    if (ativeIndex !== index) {
      setIsChange(false);

      // 设置延迟 让动画出来
      setTimeout(() => {
        setAtiveIndex(index);
        setIsChange(true);
        setPath(item.path);
        // this.setState({
        //   isChange: true,
        //   ativeIndex: index,
        //   path: item.path
        // });
      }, 200);
    }
  };

  const toDetail = () => {
    // 设置store的path
    dispatch(contextSlice.actions.setCurrentProduct({ product: path }));
  };

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
              src={item.img}
              onClick={() => {
                handleClick(index, item);
                // doNext={()=>{_next('/pages/brands/index')}}
              }}
            ></Image>
          );
        })}
        <Image
          src={logos[ativeIndex]?.img}
          className={`index3_logo index3_logo_center index3_logo_center_${ativeIndex} ${
            isChange ? "scaleDraw" : ""
          } logo_active`}
          onClick={toDetail}
        ></Image>
      </View>

      <View>
        <Image className='index3_text' src={text}></Image>
      </View>
    </View>
  );
};

export default PageView;

import { Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import img from "./imgs/index2_3.png";
import "./index.less";

interface NextProps{
  // 下一页地址
  to:string;
}

export const Next:React.FC<NextProps> = ({to}) => {
  const doNavigate =()=>{
    Taro.navigateTo({
      url: to
    })
  }
  return <Image src={img} className='index' onClick={doNavigate} />;
};

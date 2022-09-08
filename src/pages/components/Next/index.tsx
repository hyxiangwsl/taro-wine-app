import { Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.less";

interface NextProps {
  // 下一页地址
  to: string;
  img: any;
  className?: string;
}

export const Next: React.FC<NextProps> = ({ to, img, className='' }) => {
  const doNavigate = () => {
    Taro.navigateTo({
      url: to
    });
  };
  return (
    <Image
      src={img}
      className={`next_index ${className}`}
      onClick={doNavigate}
    />
  );
};

import { contextSlice } from "@/redux/contextSlice";
import { useDispatch } from "@/redux/hooks";
import { Image } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import "./index.less";

interface NextProps {
  // 下一页地址
  to?: string;
  img: any;
  className?: string;
}

export const Next: React.FC<NextProps> = ({ img, className = "" }) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { path } = router.params;

  const doNavigate = () => {
    dispatch(contextSlice.actions.doNext({ path }));
  };
  return (
    <Image
      src={img}
      className={`next_index ${className}`}
      onClick={doNavigate}
    />
  );
};

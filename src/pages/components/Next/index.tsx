import { contextSlice } from "@/redux/contextSlice";
import { useDispatch, useSelector } from "@/redux/hooks";
import { Image } from "@tarojs/components";
import "./index.less";

interface NextProps {
  // 下一页地址
  to?: string;
  img: any;
  className?: string;
}

export const Next: React.FC<NextProps> = ({ img, className = "" }) => {
  const dispatch = useDispatch();

  const currentProduct = useSelector(s => s.context.currentProduct);

  const doNavigate = () => {
    dispatch(contextSlice.actions.doNext({ product:currentProduct }));
  };
  return (
    <Image
      src={img}
      className={`next_index ${className}`}
      onClick={doNavigate}
    />
  );
};

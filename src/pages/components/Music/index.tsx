import { contextSlice } from "@/redux/contextSlice";
import { Image } from "@tarojs/components";
import { useDispatch, useSelector } from "@/redux/hooks";
import img from "./imgs/index2_8.png";
import img_bl from "./imgs/index2_8_black.png";
import "./index.less";

interface IProps {
  isBlack?: boolean; // 是否是黑色的
}

export const Music: React.FC<IProps> = props => {
  const dispatch = useDispatch();

  const playing = useSelector(s => s.context.playing);

  return (
    <Image
      src={props.isBlack ? img_bl : img}
      className={`music ${playing ? "active" : ""}`}
      onClick={() => {
        dispatch(contextSlice.actions.setChangePlay({ changePlay: true }));
      }}
    />
  );
};

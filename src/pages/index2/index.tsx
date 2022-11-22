import { SwiperContainer } from "@/pages/components/SwiperContainer/index";
import { items } from "./congfig";

const PageView = ({changePlaying}) => {

  return <SwiperContainer items={items} changePlaying={changePlaying} />;
};

export default PageView;
